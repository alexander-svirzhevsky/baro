import classNames from 'classnames';
import cn from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/widgets/Navbar';

type MainLayoutProps = {
  className?: string;
};

export const MainLayout = ({ className }: MainLayoutProps) => {
  return (
    <main className={classNames('app', {}, [cn['MainLayout'], className])}>
      <Navbar />
      <Outlet />
    </main>
  );
};
