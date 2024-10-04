import classNames from 'classnames';
import cn from './Navbar.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const { toggleTheme } = useTheme();

  return (
    <header className={classNames(cn['Navbar'], {}, [className])}>
      Navbar
      <button onClick={toggleTheme}>change theme</button>
    </header>
  );
};
