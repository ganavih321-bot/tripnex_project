import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = [
  { id: 'light', name: 'Light', icon: '☀️', desc: 'Warm cream & navy' },
  { id: 'dark', name: 'Dark', icon: '🌙', desc: 'Cinematic deep dark' },
  { id: 'sunset', name: 'Sunset', icon: '🌅', desc: 'Warm golden & peach' },
  { id: 'ocean', name: 'Ocean', icon: '🌊', desc: 'Cool azure & teal' },
  { id: 'nature', name: 'Nature', icon: '🌿', desc: 'Serene emerald & forest' },
  { id: 'auto', name: 'Auto', icon: '⚙️', desc: 'System preference' }
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('tripnex_theme');
      if (saved && THEMES.some(t => t.id === saved)) return saved;
    } catch {}
    return 'light';
  });

  useEffect(() => {
    try {
      localStorage.setItem('tripnex_theme', theme);
    } catch {}

    const root = document.documentElement;
    if (theme === 'auto') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', systemDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // Listen for system theme changes when in 'auto' mode
  useEffect(() => {
    if (theme !== 'auto') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
