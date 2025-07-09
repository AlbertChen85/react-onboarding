'use client';
import { createTheme, ThemeProvider, useColorScheme } from '@mui/material';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark' | 'system' | undefined;
  setTheme: (theme: 'light' | 'dark' | 'system' | undefined) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

function ModeSwitcher({ theme }: { theme?: 'light' | 'dark' | 'system' }) {
  const { setMode } = useColorScheme();

  useEffect(() => {
    console.log(theme);
    if (theme === 'light' || theme === 'dark') {
      setMode(theme);
    } else {
      setMode(null); // fallback for 'system' or undefined
    }
  }, [theme, setMode]);

  return null;
}

const defaultTheme = createTheme({
  colorSchemes: {
    dark: true,
    light: true,
  },
});

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system' | undefined>(undefined);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={defaultTheme}>
        <ModeSwitcher theme={theme} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
