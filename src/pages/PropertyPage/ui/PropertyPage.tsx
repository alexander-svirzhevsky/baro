import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './PropertyPage.module.scss';

interface PropertyPageProps {
  className?: string;
}

export const PropertyPage = ({ className }: PropertyPageProps) => {
  return (
    <div className={classNames(cn['PropertyPage'], {}, [className])}>
      PropertyPage
    </div>
  );
};
