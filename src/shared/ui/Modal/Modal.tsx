import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cn from './Modal.module.scss';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpened: boolean;
  onClose: () => void;
}

export const Modal = ({
  className,
  children,
  isOpened,
  onClose,
}: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  const mods: Mods = {
    [cn['opened']]: isOpened,
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpened) {
      setIsMounted(true);
    }
  }, [isOpened]);

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpened, onKeyDown]);

  if (!isMounted) return null;

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div className={classNames(cn['Modal'], mods, [className, theme])}>
        <div className={cn['overlay']} onClick={onClose}>
          <div className={cn['content']} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
