import { createTheme, ThemeProvider, useColorScheme } from '@mui/material';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type themeType = 'light' | 'dark' | 'system' | undefined;

type ThemeContextType = {
  theme: themeType;
  setTheme: (theme: themeType) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const UseThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

function ModeSwitcher({ theme }: { theme?: themeType }) {
  const { setMode } = useColorScheme();

  useEffect(() => {
    if (theme === 'light' || theme === 'dark') {
      setMode(theme);
    } else {
      setMode(null);
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
  const [theme, setTheme] = useState<themeType>(undefined);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={defaultTheme}>
        <ModeSwitcher theme={theme} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
