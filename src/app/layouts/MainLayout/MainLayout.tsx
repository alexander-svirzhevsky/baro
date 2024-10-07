import { Outlet } from 'react-router-dom';
import { Navbar } from '@/widgets/Navbar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button } from '@/shared/ui/Button/Button';
import { useState } from 'react';

type MainLayoutProps = {
  className?: string;
};

export const MainLayout = ({ className }: MainLayoutProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const onCloseModal = () => {
    setIsOpened(false);
  };

  return (
    <main id="app" className={classNames('', {}, [className])}>
      <Navbar />
      <div className="container">
        <Button onClick={() => setIsOpened(true)}>open modal</Button>
        <Modal isOpened={isOpened} onClose={onCloseModal}>
          modal content
        </Modal>
        <Outlet />
      </div>
    </main>
  );
};
