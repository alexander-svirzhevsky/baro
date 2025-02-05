import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Spinner.module.scss';

type SpinnerSize = 's' | 'm' | 'l';

interface SpinnerProps {
  className?: string;
  size?: SpinnerSize;
}

export const Spinner = ({ className, size = 'm' }: SpinnerProps) => {
  return (
    <div className={classNames(cn['Spinner'], {}, [className, cn[size]])} />
  );
};
