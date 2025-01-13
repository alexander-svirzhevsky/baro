import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Flex.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

type FlexJustify = 'start' | 'end' | 'center' | 'between';
type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
type FlexDirection = 'row' | 'column';
type FlexWrap = 'nowrap' | 'wrap';
type FlexGap = '4' | '8' | '16' | '24' | '32';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction: FlexDirection;
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: FlexWrap;
  gap?: FlexGap;
}

const directionClasses: Record<FlexDirection, string> = {
  column: cn.directionColumn,
  row: cn.directionRow,
};

const justifyClasses: Record<FlexJustify, string> = {
  start: cn.justifyStart,
  end: cn.justifyEnd,
  center: cn.justifyCenter,
  between: cn.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cn.alignStart,
  center: cn.alignCenter,
  end: cn.alignEnd,
  stretch: cn.alignStretch,
};

const gapClasses: Record<FlexGap, string> = {
  '4': cn.gap4,
  '8': cn.gap8,
  '16': cn.gap16,
  '24': cn.gap24,
  '32': cn.gap32,
};

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    direction = 'row',
    justify = 'start',
    align = 'center',
    wrap = 'nowrap',
    gap,
    ...otherProps
  } = props;

  const classes = [
    className,
    directionClasses[direction],
    justifyClasses[justify],
    alignClasses[align],
    gap && gapClasses[gap],
    cn[wrap],
  ];

  return (
    <div className={classNames(cn['Flex'], {}, classes)} {...otherProps}>
      {children}
    </div>
  );
};
