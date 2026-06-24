import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';
const THEME_EVENT = 'themeChange';

export const useTheme = () => {
 const [theme, setTheme] = useState<Theme>(() => {
   if (typeof window === 'undefined') return 'light';
   return (localStorage.getItem('theme') as Theme) ?? 'dark';
 });

  const getTheme = () => {
    const stored = localStorage.getItem(THEME_KEY) || 'light';
    setTheme(stored as Theme);
  };

  const updateTheme = (newTheme: Theme) => {
    localStorage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);

    // 🔥 Notify same-tab listeners
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  useEffect(() => {
    // Initial load
    getTheme();

    // Listen for changes (same tab)
    window.addEventListener(THEME_EVENT, getTheme);

    // Optional: listen for changes across tabs
    const handleStorage = (e: StorageEvent) => {
      if (e.key === THEME_KEY) {
        getTheme();
      }
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(THEME_EVENT, getTheme);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return {
    theme,
    setTheme: updateTheme,
  };
};
