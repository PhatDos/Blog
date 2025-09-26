import { useState, createContext, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeCt = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return <ThemeCt.Provider value={value}>{children}</ThemeCt.Provider>;
}

export { ThemeCt, ThemeProvider };
