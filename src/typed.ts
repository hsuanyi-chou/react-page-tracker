export type PageEvent = 'forward' | 'back' | 'push' | undefined;

export type PageTrackerState = {
  pageIndex: number;
  referrer: string;
  isFirstPage: boolean;
  isLastPage: boolean;
  pageEvent: PageEvent;
  pageHistory: string[];
};
