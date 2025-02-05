import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './DropDown.module.scss';
import { Link } from '../Link/Link';
import { VStack } from '../Stack';

interface MenuItem {
  title: string;
  url?: string;
  icon?: ReactNode;
  action?: () => void;
}

interface DropDownProps {
  triggerElement: ReactNode;
  items: MenuItem[];
  className?: string;
}

export const DropDown = ({
  triggerElement,
  items,
  className,
}: DropDownProps) => {
  const menuRef = useRef<null | HTMLDivElement>(null);
  const buttonRef = useRef<null | HTMLDivElement>(null);
  const dropDownRef = useRef<null | HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState({ right: 0 });

  const handleToggle = () => {
    setIsOpened((prev) => !prev);
  };

  useLayoutEffect(() => {
    if (buttonRef.current && dropDownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = dropDownRef.current.offsetWidth;
      const viewportWidth = window.innerWidth;

      if (buttonRect.right + dropdownWidth > viewportWidth) {
        setDropDownPosition({
          // 10px is #app padding
          right: viewportWidth - buttonRect.right - 10,
        });
      }
    }
  }, [isOpened]);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (
        isOpened &&
        menuRef.current &&
        !menuRef.current?.contains(e.target as Node)
      ) {
        handleToggle();
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [isOpened]);

  return (
    <div ref={menuRef} className={classNames(cn['DropDown'], {}, [className])}>
      <div className={cn.triggerElement} ref={buttonRef} onClick={handleToggle}>
        {triggerElement}
      </div>
      {isOpened && (
        <div
          ref={dropDownRef}
          className={cn.menuContainer}
          style={{
            right: dropDownPosition.right,
          }}
        >
          <ul className={cn.menuList}>
            <VStack align="stretch">
              {items.map(({ title, icon, url, action }) => (
                <li key={title} className={cn.item}>
                  {icon && <span>{icon}</span>}
                  {url ? (
                    <Link type="clear" to={url} onClick={handleToggle}>
                      <div>{title}</div>
                    </Link>
                  ) : (
                    <div
                      onClick={() => {
                        action?.();
                        handleToggle();
                      }}
                    >
                      {title}
                    </div>
                  )}
                </li>
              ))}
            </VStack>
          </ul>
        </div>
      )}
    </div>
  );
};
