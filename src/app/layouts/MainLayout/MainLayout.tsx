import { Outlet } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';

type MainLayoutProps = {
  className?: string;
};

export const MainLayout = ({ className }: MainLayoutProps) => {
  return (
    <main id="app" className={classNames('', {}, [className])}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
};
