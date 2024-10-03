import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './app/styles/index.scss';
import { MainLayout } from './app/layouts/MainLayout';
import { AppRoutes } from './shared/const/router';

const router = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.MAIN,
        element: <span>It's a main page</span>,
      },
    ],
  },
  {
    path: '*',
    element: <span>Not found page</span>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
