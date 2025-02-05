import LogoIcon from '@/shared/assets/icons/logo.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Logo.module.scss';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/">
      <LogoIcon className={classNames(cn['Logo'], {}, [className])} />
    </Link>
  );
};
