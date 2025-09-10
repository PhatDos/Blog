import { useState, createContext } from "react";

const ThemeCt = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    toggleTheme
  };

  return <ThemeCt.Provider value={value}>{children}</ThemeCt.Provider>;
}

export { ThemeCt, ThemeProvider };
