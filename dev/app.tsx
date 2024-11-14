import { PageTracker } from '../src';
import { router } from './router';
import { RouterProvider } from '@tanstack/react-router';

export default function App() {
  return (
    <PageTracker>
      <RouterProvider router={router} />
    </PageTracker>
  );
}
