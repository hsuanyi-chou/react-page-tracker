'use client';
import { useEffect, useRef } from 'react';
import { PageTrackerState } from './typed';
import { pageTrackerStore } from './page-tracker-store';

const DEBUG = false;
export type HistoryCustomState = {
  __REACT_PAGE_TRACKER_INTERNAL__: Pick<PageTrackerState, 'pageIndex' | 'referrer' | 'pageHistory'>;
};

export const usePageTrackerHandler = () => {
  const pageIndex = useRef(0);
  // for isLastPage usage
  const visitedTotalLength = useRef(0);

  useEffect(() => {
    initHistoryState();

    /**
     * 處理 user 操作原生上、下一頁或頁面上自行加入的返回鍵時
     **/
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as HistoryCustomState;
      const statePageIndex = state.__REACT_PAGE_TRACKER_INTERNAL__?.pageIndex ?? 0;
      const pageEvent = pageIndex.current > statePageIndex ? 'back' : 'forward';
      if (pageEvent === 'forward') {
        pageIndex.current++;
      } else {
        pageIndex.current = statePageIndex ?? 0;
      }
      pageTrackerStore.setState({
        pageIndex: pageIndex.current,
        isFirstPage: pageIndex.current === 0,
        isLastPage: pageIndex.current === visitedTotalLength.current,
        referrer: state.__REACT_PAGE_TRACKER_INTERNAL__.referrer,
        pageHistory: [...state.__REACT_PAGE_TRACKER_INTERNAL__.pageHistory],
        pageEvent,
      });
    };

    // save original popState, pushState
    const originalOnPopState = window.onpopstate;
    const originalPushState = history.pushState.bind(history);

    // override popState, pushState
    window.onpopstate = handlePopState;
    history.pushState = (state: unknown, title: string, url: string) => {
      const newPageIndex = (history.state.__REACT_PAGE_TRACKER_INTERNAL__?.pageIndex ?? 0) + 1;
      pageIndex.current = newPageIndex;
      visitedTotalLength.current = newPageIndex;
      const newPageHistory = pageTrackerStore.getImmutablePageHistory();
      newPageHistory.push(url);
      const newState = {
        pageIndex: newPageIndex,
        referrer: window.location.href,
        pageHistory: newPageHistory,
      };

      const stateWithPageInfo: HistoryCustomState = {
        ...(state as object),
        __REACT_PAGE_TRACKER_INTERNAL__: {
          ...newState,
        },
      };
      pageTrackerStore.setState({
        ...newState,
        isFirstPage: false,
        isLastPage: true,
        pageEvent: 'push',
      });

      debugLog(
        `pushState: stateWithPageInfo.pageIndex -->${stateWithPageInfo.__REACT_PAGE_TRACKER_INTERNAL__.pageIndex} ,pageIndex.current --> ${pageIndex.current} referrer -->${stateWithPageInfo.__REACT_PAGE_TRACKER_INTERNAL__.referrer}`,
      );

      return originalPushState(stateWithPageInfo, title || '', url || '');
    };

    return () => {
      window.onpopstate = originalOnPopState;
      history.pushState = originalPushState;
    };
  }, []);
};

const debugLog = (message: string) => {
  if (DEBUG) {
    console.debug(`[DEBUG PAGE CHANGE] ${message}`);
  }
};

const initHistoryState = () => {
  const defaultData = {
    __REACT_PAGE_TRACKER_INTERNAL__: {
      pageIndex: 0,
      referrer: document.referrer,
      pageHistory: [window.location.pathname],
    } as Partial<PageTrackerState>,
  };

  if (typeof history.state === 'object' && history.state !== null) {
    history.replaceState(
      {
        ...history.state,
        ...defaultData,
      },
      '',
    );
  } else {
    history.replaceState(defaultData, '');
  }
  pageTrackerStore.setState(defaultData.__REACT_PAGE_TRACKER_INTERNAL__);
};
