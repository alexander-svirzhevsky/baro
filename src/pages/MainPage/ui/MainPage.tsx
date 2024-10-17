import { Button } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './MainPage.module.scss';
import { LoginModal } from '@/features/AuthByUsername';
import { useState } from 'react';

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
      <LoginModal isOpened={isOpened} onCloseModal={onCloseModal} />
    </div>
  );
};
