# React Page Tracker

<p align="center">
  <a href="https://react-page-tracker.typeart.cc" target="blank"><img src="https://raw.githubusercontent.com/hsuanyi-chou/react-page-tracker/refs/heads/main/www/public/logo.svg" width="120" alt="react-page-tracker Logo" /></a>
</p>

`react-page-tracker` is a lightweight, zero-dependency library providing accurate navigation tracking, fixed
`document.referrer` value, and complete history support for React frameworks. Fully compatible with Next.js, Remix, TanStack Query, and React Router.

👉 [Demo](https://react-page-tracker.typeart.cc/demo)

📖 [Documentation](https://react-page-tracker.typeart.cc)

## Features

- 📝 Identifies whether the user navigated to the page via browser back/forward buttons or by clicking a link.
- 🧩 Works with `History.go()`, `history.forward()`, `history.back()`, and `history.pushState()`.
- 🐞 Fixes incorrect `document.referrer` after navigation, providing the correct referrer for tracking purposes.
- 💡 Accurately determines whether the current page is the first or last page.
- 🧭 Offers a complete history browsing record.
- 🚀 Supports Next.js, Remix, TanStack Query, and React Router.
- ⚡️ zero deps.
- ⭐️ typed-safe.

### development

In development mode, React's StrictMode executes components twice, resulting in two entries in the history data,
Which means `pageHistory` will look like: `['/', '/products', '/products', '/products/1', '/products/1']` and the `pageHistoryLength` will be `5`.
However, after deployment, it behaves normally.

### Usage
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
  pageEvent?: PageEvent; // 'back' | 'forward' | 'push' | undefined.  undefined for first visit.
  /** history browsing record */
  pageHistory: string[]; // ['/', '/products', '/pdocuts/1', '/products/2', '/about', ...]
  /**
   * total page history length.
   * When user press `back` button, the `pageHistory`'s end link will become the current link.
   * You may need this total length to handle `history.go(N)` to forward N page.
   */  
  pageHistoryLength: number;
}
```
Simply to get the values you need in any component.

```tsx
  const { pageIndex, referrer, isFirstPage, isLastPage, pageEvent, pageHistory } = usePageTrackerStore((state) => state);
```

## Installation
```bash
npm install react-page-tracker
```

<details><summary> ▲ Next.js</summary>

`layout.tsx`

```diff
+ import { PageTracker } from 'react-page-tracker';
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body>
+      <PageTracker />
        {children}
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

[Next.js template](https://github.com/hsuanyi-chou/react-page-tracker/tree/main/templates/next-example)
</details>

<details><summary> 🆁 Remix</summary>

force Vite to build to CommonJS

`vite.config.ts`

```diff
export default defineConfig({
+  ssr: {
+    noExternal: ['react-page-tracker'], // force Vite to build to CommonJS
+  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
});
```

`root.tsx`
```diff
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import './tailwind.css';
+ import { PageTracker } from 'react-page-tracker';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
+       <PageTracker />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
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
[Remix template](https://github.com/hsuanyi-chou/react-page-tracker/tree/main/templates/remix-example)
</details>

## Contributing

Be welcome to contribute! Here's how you can contribute:

- [Open an issue](https://github.com/hsuanyi-chou/react-page-tracker/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/hsuanyi-chou/react-page-tracker/pull) to add new features/make quality-of-life improvements/fix bugs.

<a href="https://github.com/hsuanyi-chou/react-page-tracker/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hsuanyi-chou/react-page-tracker" />
</a>
<br />
<sub>
  Built by <a href="https://github.com/hsuanyi-chou">Hsuan Yi, Chou</a>
</sub>
<br />

[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/typeart)


## License

Licensed under the [MIT License](LICENSE.md).
