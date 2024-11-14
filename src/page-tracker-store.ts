import { useSyncExternalStore } from 'react';
import { PageTrackerState, Selector } from './typed';

const INITIAL_STATE: PageTrackerState = {
  pageIndex: 0,
  referrer: '',
  pageEvent: undefined,
  isFirstPage: true,
  pageHistory: [],
};

export const pageTrackerStore = {
  state: {
    ...INITIAL_STATE,
  } as PageTrackerState,
  listeners: new Set<() => void>(),

  // 獲取當前狀態
  getState(): PageTrackerState {
    return this.state as PageTrackerState;
  },

  getImmutablePageHistory(): PageTrackerState['pageHistory'] {
    return this.state.pageHistory.slice();
  },

  // 更新狀態並通知所有訂閱者
  setState: (newState: Partial<PageTrackerState>) => {
    pageTrackerStore.state = {
      ...pageTrackerStore.state,
      ...newState,
    } as PageTrackerState;
    requestAnimationFrame(() => {
      pageTrackerStore.listeners.forEach((listener) => listener());
    });
  },

  // 訂閱狀態變化
  subscribe: (listener: () => void) => {
    pageTrackerStore.listeners.add(listener);
    return () => pageTrackerStore.listeners.delete(listener); // 返回取消訂閱的函數
  },
};

export const usePageTrackerStore = <T>(selector: Selector): T => {
  let lastSelected: T;

  return useSyncExternalStore(
    pageTrackerStore.subscribe,
    () => {
      const selected: T = selector(pageTrackerStore.getState());

      // 僅當選擇的值發生改變時才更新
      if (JSON.stringify(lastSelected) !== JSON.stringify(selected)) {
        lastSelected = selected;
      }
      return lastSelected;
    },
    () => INITIAL_STATE as T,
  );
};
