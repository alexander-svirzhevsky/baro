import { useState } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const onCloseModal = () => {
    setIsOpened(false);
  };
  return (
    <div className={classNames(cn['MainPage'], {}, [className])}>
      <Button onClick={() => setIsOpened(true)}>open modal</Button>
      <Modal isOpened={isOpened} onClose={onCloseModal}>
        modal content
      </Modal>
    </div>
  );
};
