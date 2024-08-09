"use client";
import React, { createContext, useState } from "react";

type ContextType = {
  theme: string;
  toggleTheme: () => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ContextType | null>(null);

const ThemeProvider = ({ children }: ProviderProps): React.ReactNode => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
export type { ContextType };
