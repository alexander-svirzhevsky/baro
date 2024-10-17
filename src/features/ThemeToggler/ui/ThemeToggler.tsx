import { Button } from '@/shared/ui/Button/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeTogglerProps {
  className?: string;
}

export const ThemeToggler = ({ className }: ThemeTogglerProps) => {
  const { toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme} className={className}>
      change theme
    </Button>
  );
};
