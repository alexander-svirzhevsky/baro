import {
  createBrowserRouter,
  RouterProvider as RouterProviderRectRouterDom,
} from 'react-router-dom';
import { AppRoutes } from '@/shared/const/router';
import { MainLayout } from '@/app/layouts/MainLayout';
import { MainPage } from '@/pages/MainPage';
import { lazy, Suspense } from 'react';

const NewsPage = lazy(() => import('@/pages/NewsPage'));

const router = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.MAIN,
        element: <MainPage />,
      },
      {
        path: AppRoutes.NEWS,
        element: (
          <Suspense fallback="Loading...">
            <NewsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <span>Not found page</span>,
  },
]);

export const RouterProvider = () => {
  return <RouterProviderRectRouterDom router={router} />;
};
