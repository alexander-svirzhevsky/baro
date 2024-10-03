import classNames from 'classnames';
import cn from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={classNames(cn['Navbar'], {}, [className])}>
      Navbar
    </header>
  );
};
