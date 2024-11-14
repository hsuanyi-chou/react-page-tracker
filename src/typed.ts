export type PageEvent = 'forward' | 'back' | 'push' | undefined;

export type PageTrackerState = {
  pageIndex: number;
  referrer: string;
  isFirstPage?: boolean;
  pageEvent: PageEvent;
  pageHistory: string[];
};

export type Selector = <T>(state: PageTrackerState) => T;
