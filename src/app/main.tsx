import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import './i18n/i18n';
import { App } from './app';
import { DashboardPage } from '@/pages/dashboard';
import { TracksListRoute } from '@/pages/tracksList';
import { SelectedTrackDetailRoute } from '@/pages/selectedTrackDetail';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <DashboardPage />,
          children: [
            { index: true, element: <TracksListRoute /> },
            { path: 'selectedTrackDetail', element: <SelectedTrackDetailRoute /> },
          ],
        },
        { path: '*', element: <div>404</div> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  },
);

const el = document.getElementById('root');
if (!el) throw new Error('Root element #root not found');

//создание экземпляра клиента React
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retry: 0,
      staleTime: 20 * 1000, //сколько времени данные считаются свежими
      gcTime: 5 * 60 * 1000, // через сколько неиспользуемый кэш будет удалён
      refetchOnMount: true, // делать ли повторный запрос при монтировании компонента
      refetchOnWindowFocus: false, // делать ли повторный запрос при возврате на вкладку
      refetchOnReconnect: false, // делать ли повторный запрос при восстановлении интернета
      refetchInterval: 0, // автообновление
      refetchIntervalInBackground: false, // обновлять даже если вкладка неактивна
    },
  },
});

createRoot(el).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
