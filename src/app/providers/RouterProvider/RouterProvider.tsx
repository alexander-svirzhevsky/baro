import {
  createBrowserRouter,
  RouterProvider as RouterProviderRectRouterDom,
} from 'react-router-dom';
import { AppRoutes } from '@/shared/const/router';
import { MainLayout } from '@/app/layouts/MainLayout';
import { MainPage } from '@/pages/MainPage';
import { lazy, Suspense } from 'react';

const BlogPage = lazy(() => import('@/pages/BlogPage'));
const PropertyPage = lazy(() => import('@/pages/PropertyPage'));

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
        path: AppRoutes.PROPERTY,
        element: (
          <Suspense fallback="Loading...">
            <PropertyPage />
          </Suspense>
        ),
      },
      {
        path: AppRoutes.BLOG,
        element: (
          <Suspense fallback="Loading...">
            <BlogPage />
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
