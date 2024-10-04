import cn from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/widgets/Navbar';
import { classNames } from '@/shared/lib/classNames/classNames';

type MainLayoutProps = {
  className?: string;
};

export const MainLayout = ({ className }: MainLayoutProps) => {
  return (
    <main className={classNames('app', {}, [cn['MainLayout'], className])}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
};
