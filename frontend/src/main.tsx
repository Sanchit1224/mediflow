import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppErrorBoundary } from '@/app/error-boundary';
import { AppProviders } from '@/app/app-providers';
import { router } from '@/routes/router';
import '@/styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode><AppErrorBoundary><AppProviders><RouterProvider router={router} /></AppProviders></AppErrorBoundary></StrictMode>,
);
