import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './NewsPage.module.scss';

interface NewsPageProps {
  className?: string;
}

export const NewsPage = ({ className }: NewsPageProps) => {
  return (
    <div className={classNames(cn['NewsPage'], {}, [className])}>NewsPage</div>
  );
};
