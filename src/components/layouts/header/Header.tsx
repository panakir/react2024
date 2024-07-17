import { ThemeSwitcher } from "@/components/elements/themeSwitcher/ThemeSwitcher";
import React from "react";
import styles from "./header.module.scss";

export const Header = (): React.ReactNode => {
  return (
    <header className={styles.header}>
      <h1>React Course by Rolling Scopes School</h1>
      <ThemeSwitcher />
    </header>
  );
};
