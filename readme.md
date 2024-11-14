# React Page Tracker

`react-page-tracker` is a super lightweight (only 3 KB) and dependency-free React package designed for page tracking. 
It accurately determines whether the current page is the first or last, fixes incorrect `document.referrer` for precise tracking, and provides a complete `history` browsing record. 
It also identifies if users navigated via browser back/forward buttons or clicked links. Fully compatible with Next.js, Remix, TanStack Query, and React Router.

## Features

- Super lightweight, only 3 KB.
- Accurately determines whether the current page is the first or last page.
- Fixes incorrect `document.referrer` after navigation, providing the correct referrer for tracking purposes.
- Offers a complete history browsing record.
- Identifies whether the user navigated to the page via browser back/forward buttons or by clicking a link.
- Supports Next.js, Remix, TanStack Query, and React Router.
- zero deps.
- typed-safe.

### `React Page Tracker` provides the following information
```tsx
type PageTrackerState = {
  /** current page index */
  pageIndex: number;
  /** correct `document.referrer` */
  referrer: string;
  /** whether the current page is the first page */
  isFirstPage: boolean;
  /** whether the current page is the last page */
  isLastPage: boolean;
  /** whether the user navigated to the page via browser back/forward buttons or by clicking a link */
  pageEvent: PageEvent;
  /** history browsing record */
  pageHistory: string[];
}
```

## Installation
```bash
npm install react-page-tracker
```

### Next.js

`layout.tsx`
```diff
+ import { PageTracker } from 'react-page-tracker';
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body>
+      <PageTracker>{children}</PageTracker>
    </body>
    </html>
  );
}
```

You are all set up! Now you can access the page tracking information in any component.

`component.tsx`
```tsx
import { usePageTrackerStore } from 'react-page-tracker';

export const PageTrackerValue = () => {
  // get all state
  const state = usePageTrackerStore((state) => state);
  // get the specific state you'd like to use
  const pickState = usePageTrackerStore((state) => ({
    isFirstPage: state.isFirstPage,
    referrer: state.referrer,
    pageHistory: state.pageHistory,
  }));

  return (
    <div className="flex">
      <div className="flex flex-col gap-3">
        <pre className="rounded-md bg-gray-100 px-2 py-0.5 font-bold">
          state: {JSON.stringify(state)}
        </pre>
        <pre className="rounded-md bg-gray-100 px-2 py-0.5 font-bold">
          pickState: {JSON.stringify(pickState)}
        </pre>
      </div>
    </div>
  );
};
```

## Contributing

Be welcome to contribute! Here's how you can contribute:

- [Open an issue](https://github.com/hsuanyi-chou/react-page-tracker/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/hsuanyi-chou/react-page-tracker/pull) to add new features/make quality-of-life improvements/fix bugs.

<a href="https://github.com/hsuanyi-chou/react-page-tracker/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hsuanyi-chou/react-page-tracker" />
</a>
</br>
<sub>
  Built by <a href="https://github.com/hsuanyi-chou">Hsuan Yi, Chou</a>
</sub>

## License

Licensed under the [MIT License](LICENSE.md).
