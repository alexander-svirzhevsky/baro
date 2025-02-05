import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './BlogPage.module.scss';

interface BlogPageProps {
  className?: string;
}

export const BlogPage = ({ className }: BlogPageProps) => {
  return (
    <div className={classNames(cn['BlogPage'], {}, [className])}>BlogPage</div>
  );
};
