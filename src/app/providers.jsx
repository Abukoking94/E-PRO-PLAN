import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { themeConfig } from '../features/theme/themeConfig';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 2,
    },
  },
});

const ThemeContext = createContext(null);

function resolveInitialTheme() {
  if (typeof window === 'undefined') {
    return themeConfig.defaultTheme;
  }

  const storedTheme = window.localStorage.getItem(themeConfig.storageKey);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within AppProviders.');
  }

  return context;
}

export function AppProviders({ children }) {
  const [theme, setTheme] = useState(resolveInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
    window.localStorage.setItem(themeConfig.storageKey, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      isLightTheme: theme === 'light',
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light')),
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeContext.Provider>
  );
}
