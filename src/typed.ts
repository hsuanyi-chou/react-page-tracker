export type PageEvent = 'forward' | 'back' | 'push' | undefined;

export type PageTrackerState = {
  /** current page index */
  pageIndex: number;
  /** correct document.referrer */
  referrer: string;
  /** whether the current page is the first page */
  isFirstPage: boolean;
  /** whether the current page is the last page */
  isLastPage: boolean;
  /** whether the user navigated to the page via browser back/forward buttons or by clicking a link */
  pageEvent: PageEvent;
  /** history browsing record */
  pageHistory: string[];
};
