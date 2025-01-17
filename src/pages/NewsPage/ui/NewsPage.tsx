import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './NewsPage.module.scss';
import { Link } from 'react-router-dom';

interface NewsPageProps {
  className?: string;
}

export const NewsPage = ({ className }: NewsPageProps) => {
  return (
    <div className={classNames(cn['NewsPage'], {}, [className])}>
      NewsPage
      <Link to="/">To home page</Link>
    </div>
  );
};
