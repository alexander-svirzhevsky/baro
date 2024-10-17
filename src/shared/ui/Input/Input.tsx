import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Input.module.scss';
import { ChangeEvent, InputHTMLAttributes, memo, useId } from 'react';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}

export const Input = memo((props: InputProps) => {
  const { className, value, label, onChange, ...otherProps } = props;
  const inputId = useId();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cn['InputWrapper'], {}, [className])}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        className={cn['input']}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
