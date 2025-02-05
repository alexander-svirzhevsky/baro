import { Link as RLink, LinkProps as RLinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Link.module.scss';
import { ReactNode } from 'react';

type LinkType = 'clear' | 'primary';

interface LinkProps extends RLinkProps {
  children: ReactNode;
  type?: LinkType;
  className?: string;
}

export const Link = ({
  children,
  type = 'primary',
  className,
  to,
  ...otherProps
}: LinkProps) => {
  return (
    <RLink
      to={to}
      className={classNames(cn['Link'], {}, [className, cn[type]])}
      {...otherProps}
    >
      {children}
    </RLink>
  );
};
