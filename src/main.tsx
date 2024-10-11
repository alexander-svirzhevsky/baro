import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider';
import { QueryClientProvider } from './app/providers/QueryClientProvider/QueryClientProvider';
import { RouterProvider } from './app/providers/RouterProvider/RouterProvider';
import './app/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
