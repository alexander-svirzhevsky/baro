import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './LoginModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Suspense } from 'react';

interface LoginModalProps {
  className?: string;
  isOpened: boolean;
  onCloseModal: () => void;
}

export const LoginModal = ({
  className,
  isOpened,
  onCloseModal,
}: LoginModalProps) => {
  return (
    <div className={classNames(cn['LoginModal'], {}, [className])}>
      <Modal isOpened={isOpened} onClose={onCloseModal}>
        <Suspense fallback="Loading...">
          <LoginFormAsync onSuccess={onCloseModal} />
        </Suspense>
      </Modal>
    </div>
  );
};
