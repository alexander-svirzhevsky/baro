import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Navbar.module.scss';
import { Link } from '@/shared/ui/Link/Link';
import { Button } from '@/shared/ui/Button/Button';
import { Logo } from '@/features/Logo';
import { AppRoutes } from '@/shared/const/router';
import { useState } from 'react';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/const/localstorage';
import { LoginModal } from '@/features/AuthByUsername';
import { useForceRerender } from '@/shared/lib/hooks/useForceRerender';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import { DropDown } from '@/shared/ui/DropDown/DropDown';

type NavbarProps = {
  className?: string;
};

const linksList = [
  { title: 'Home', to: AppRoutes.MAIN },
  { title: 'Property', to: AppRoutes.PROPERTY },
  { title: 'Blog', to: AppRoutes.BLOG },
];

export const Navbar = ({ className }: NavbarProps) => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const forceRerender = useForceRerender();
  const token = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

  const onCloseModal = () => {
    setIsOpenedModal(false);
  };

  const onLogin = () => {
    setIsOpenedModal(true);
  };

  const onLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    forceRerender();
  };

  return (
    <>
      <header className={classNames(cn['Navbar'], {}, [className])}>
        <Logo />
        <div className={cn.controles}>
          <div className={cn.links}>
            {linksList.map(({ title, to }) => (
              <Link to={to} key={title}>
                {title}
              </Link>
            ))}
          </div>
          {!token && <Button onClick={onLogin}>Log in</Button>}
          {token && (
            <DropDown
              triggerElement={<ProfileIcon className={cn.profileIcon} />}
              items={[
                { title: 'Profile', url: '/' },
                { title: 'Log out', action: onLogout },
              ]}
            />
          )}
        </div>
      </header>
      <LoginModal isOpened={isOpenedModal} onCloseModal={onCloseModal} />
    </>
  );
};
