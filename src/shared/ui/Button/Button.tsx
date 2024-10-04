import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cn from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button = memo(
  ({ className, children, disabled, ...otherProps }: ButtonProps) => {
    const mods: Mods = {
      [cn['disabled']]: disabled,
    };

    return (
      <button
        className={classNames(cn['Button'], mods, [className])}
        disabled={disabled}
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);
