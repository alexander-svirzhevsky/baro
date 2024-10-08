import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Input.module.scss';
import { ChangeEvent, InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const { className, value, onChange, ...otherProps } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cn['InputWrapper'], {}, [className])}>
      <input
        className={cn['input']}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
};
