import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './MainPage.module.scss';
interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={classNames(cn['MainPage'], {}, [className])}>main page</div>
  );
};
