import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './index.css';
import './i18n';
import { App } from './components/app';
import { DashboardPage } from './components/dashboard/DashboardPage';
import { TracksListRoute } from './components/tracksList';
import { SelectedTrackDetailRoute } from './components/selectedTrackDetail';

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

createRoot(el).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
