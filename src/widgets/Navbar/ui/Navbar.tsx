import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeToggler } from '@/features/ThemeToggler';
import cn from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={classNames(cn['Navbar'], {}, [className])}>
      <div className={cn.container}>
        <ThemeToggler />
      </div>
    </header>
  );
};
