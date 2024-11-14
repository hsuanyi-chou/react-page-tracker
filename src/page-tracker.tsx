'use client';
import React from 'react';
import { usePageTrackerHandler } from './use-page-tracker-handler';

export type PageTrackerProps = {
  children?: React.ReactNode;
};

export const PageTracker = ({ children }: PageTrackerProps) => {
  usePageTrackerHandler();
  return <>{children}</>;
};
