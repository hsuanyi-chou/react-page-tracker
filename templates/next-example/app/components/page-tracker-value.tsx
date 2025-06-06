'use client';
import React from 'react';
import { usePageTrackerStore } from 'react-page-tracker';

const PageTrackerValue = () => {
  const state = usePageTrackerStore((state) => state);

  const values = Object.entries(state).map(([key, value]) => {
    const format = (objValue: typeof value) => {
      if (typeof objValue === 'string') {
        return `"${objValue}"`;
      }
      return JSON.stringify(objValue);
    };
    return `"${key}": ${format(value)}`;
  });
  return (
    <div
      className={'flex flex-col overflow-auto rounded-md border bg-gray-200/40 px-4 py-3 font-bold'}
    >
      {`{`}
      {values.map((value, index) => (
        <span className="pl-4" key={index}>
          {value},
        </span>
      ))}
      {`}`}
    </div>
  );
};

export default PageTrackerValue;
