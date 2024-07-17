import { ThemeSwitcher } from "@/components/elements/themeSwitcher/ThemeSwitcher";
import React from "react";
import styles from "./header.module.scss";
import { useThemeContext } from "@/hooks/useThemeContext";

export const Header = (): React.ReactNode => {
  const { theme } = useThemeContext();

  return (
    <header className={`${styles.header} ${theme}`}>
      <h1>React Course by Rolling Scopes School</h1>
      <ThemeSwitcher />
    </header>
  );
};
