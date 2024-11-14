export type PageTrackerState = {
  pageIndex: number;
  referrer: string;
  isFirstPage?: boolean;
  pageEvent: 'forward' | 'back' | 'push' | undefined;
  pageHistory: string[];
};

export type Selector = <T>(state: PageTrackerState) => T;
