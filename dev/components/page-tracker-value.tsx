import React from 'react';
import { usePageTrackerStore } from '../../src';

const PageTrackerValue = () => {
  const pickState = usePageTrackerStore((state) => ({
    isLastPage: state.isLastPage,
    pageHistory: state.pageHistory,
  }));
  const state = usePageTrackerStore((state) => state);

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

export default PageTrackerValue;
