'use client';
import { useSyncExternalStore } from 'react';
import { PageTrackerState } from './typed';

const INITIAL_STATE: PageTrackerState = {
  pageIndex: 0,
  referrer: '',
  pageEvent: undefined,
  isFirstPage: true,
  isLastPage: true,
  pageHistory: [],
  pageHistoryLength: 0,
};

export const pageTrackerStore = {
  state: {
    ...INITIAL_STATE,
  } as PageTrackerState,
  listeners: new Set<() => void>(),

  // Get current state
  getState(): PageTrackerState {
    return this.state;
  },

  getImmutablePageHistory(): PageTrackerState['pageHistory'] {
    return this.state.pageHistory.slice();
  },

  // Update state and notify all subscribers
  setState: (newState: Partial<PageTrackerState>) => {
    pageTrackerStore.state = {
      ...pageTrackerStore.state,
      ...newState,
    } as PageTrackerState;
    // Notify subscribers on the next animation frame for smoother updates
    requestAnimationFrame(() => {
      pageTrackerStore.listeners.forEach((listener) => listener());
    });
  },

  // Subscribe to state changes
  subscribe: (listener: () => void) => {
    pageTrackerStore.listeners.add(listener);
    return () => pageTrackerStore.listeners.delete(listener); // Return an unsubscribe function
  },
};

/**
 * get PageTrackerStore in any function.
 **/
export const getPageTrackerStore = () => {
  return pageTrackerStore.getState();
};

export const usePageTrackerStore = <T>(selector: (state: PageTrackerState) => T): T => {
  let lastSelected: T;

  return useSyncExternalStore(
    pageTrackerStore.subscribe,
    () => {
      const selected = selector(pageTrackerStore.getState());

      // Update only when the selected value changes
      if (JSON.stringify(lastSelected) !== JSON.stringify(selected)) {
        lastSelected = selected;
      }
      return lastSelected;
    },
    () => selector(pageTrackerStore.getState()) as T,
  );
};
