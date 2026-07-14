import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '@/components/layout/app-shell';
import { CommandCenterPage } from '@/pages/command-center-page';
import { LandingPage } from '@/pages/landing-page';
import { NotFoundPage } from '@/pages/not-found-page';

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/app', element: <AppShell />, children: [
    { index: true, element: <CommandCenterPage /> },
    { path: 'operations', element: <CommandCenterPage /> },
    { path: 'intelligence', element: <CommandCenterPage /> },
    { path: 'settings', element: <CommandCenterPage /> },
  ] },
  { path: '*', element: <NotFoundPage /> },
]);
