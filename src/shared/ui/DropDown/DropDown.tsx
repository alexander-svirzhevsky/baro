import {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  KeyboardEvent,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './DropDown.module.scss';
import { Link } from '../Link/Link';
import { VStack } from '../Stack';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const menuRef = useRef<null | HTMLDivElement>(null);
  const buttonRef = useRef<null | HTMLDivElement>(null);
  const dropDownRef = useRef<null | HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState({ right: 0 });
  const [focusedIndex, setFocusedIndex] = useState<null | number>(null);

  const handleToggle = () => {
    setIsOpened((prev) => !prev);
  };

  const onKeyDownTriggerElement = (e: KeyboardEvent) => {
    if (['ArrowDown', 'Enter'].includes(e.code)) {
      handleToggle();
      setFocusedIndex(0);
    }

    if (e.code === 'Escape') {
      setIsOpened(false);
      setFocusedIndex(null);
    }
  };

  const onKeyDownItem = (e: KeyboardEvent, index: number) => {
    console.log(e.code);

    if (e.code === 'ArrowDown') {
      setFocusedIndex((prev) => {
        if (prev! < items.length - 1) {
          return prev! + 1;
        }

        return 0;
      });
    }

    if (e.code === 'ArrowUp') {
      setFocusedIndex((prev) => {
        if (prev! > 0) {
          return prev! - 1;
        }

        return items.length - 1;
      });
    }

    if (e.code === 'Escape') {
      setIsOpened(false);
      setFocusedIndex(null);
      buttonRef.current?.focus();
    }

    if (e.code === 'Enter') {
      const currentItem = items[index];

      if (currentItem.url) {
        navigate(currentItem.url);
      } else if (currentItem.action) {
        currentItem.action();
      }

      setIsOpened(false);
      setFocusedIndex(null);
      buttonRef.current?.focus();
    }
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

  useEffect(() => {
    if (isOpened && focusedIndex !== null) {
      const element = document.getElementById(`dropdown-item-${focusedIndex}`);
      element?.focus();
    }
  }, [isOpened, focusedIndex]);

  return (
    <div ref={menuRef} className={classNames(cn['DropDown'], {}, [className])}>
      <div
        className={cn.triggerElement}
        ref={buttonRef}
        onClick={handleToggle}
        onKeyDown={onKeyDownTriggerElement}
        tabIndex={0}
      >
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
              {items.map(({ title, icon, url, action }, index) => (
                <li
                  tabIndex={focusedIndex === index ? 0 : -1}
                  key={title}
                  className={classNames(
                    cn.item,
                    {
                      [cn.focused]: index === focusedIndex,
                    },
                    [],
                  )}
                  id={`dropdown-item-${index}`}
                  onKeyDown={(e) => onKeyDownItem(e, index)}
                >
                  {icon && <span>{icon}</span>}
                  {url ? (
                    <Link
                      type="clear"
                      to={url}
                      tabIndex={-1}
                      onClick={handleToggle}
                    >
                      {title}
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
