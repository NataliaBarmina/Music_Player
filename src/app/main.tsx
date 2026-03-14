import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './providers/i18n';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/router';
import { queryClient } from './providers/query-client';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    ,
  </React.StrictMode>,
);
