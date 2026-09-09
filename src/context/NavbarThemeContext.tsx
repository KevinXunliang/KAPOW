// src/context/NavbarThemeContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

export type NavbarTheme = 'light' | 'dark'; // light=深色文字，dark=白色文字

interface NavbarThemeContextType {
  theme: NavbarTheme;
  setTheme: (theme: NavbarTheme) => void;
}

const NavbarThemeContext = createContext<NavbarThemeContextType | undefined>(undefined);

export function NavbarThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<NavbarTheme>('light');
  return (
    <NavbarThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </NavbarThemeContext.Provider>
  );
}

export function useNavbarTheme() {
  const context = useContext(NavbarThemeContext);
  if (!context) {
    throw new Error('useNavbarTheme must be used within NavbarThemeProvider');
  }
  return context;
}