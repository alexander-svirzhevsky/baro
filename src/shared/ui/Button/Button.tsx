import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cn from './Button.module.scss';
import { Spinner } from '../Spinner/Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = memo(
  ({
    className,
    children,
    disabled,
    isLoading = false,
    ...otherProps
  }: ButtonProps) => {
    const mods: Mods = {
      [cn.disabled]: disabled,
      [cn.isLoading]: isLoading,
    };

    return (
      <button
        className={classNames(cn['Button'], mods, [className])}
        disabled={disabled}
        {...otherProps}
      >
        {children}
        {isLoading && <Spinner size="s" />}
      </button>
    );
  },
);
