import {
  createBrowserRouter,
  RouterProvider as RouterProviderRectRouterDom,
} from 'react-router-dom';
import { AppRoutes } from '@/shared/const/router';
import { MainLayout } from '@/app/layouts/MainLayout';
import { MainPage } from '@/pages/MainPage';

const router = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.MAIN,
        element: <MainPage />,
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
