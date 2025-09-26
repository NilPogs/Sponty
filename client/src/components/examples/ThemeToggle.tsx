import { ThemeProvider } from '../../hooks/use-theme';
import ThemeToggle from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}