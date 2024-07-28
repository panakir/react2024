import { ContextType, ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const useThemeContext = (): ContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext hook must used only with ThemeProvider");
  }
  return context;
};

export { useThemeContext };
