import React from "react";
import styles from "./switcher.module.scss";
import { useThemeContext } from "@/hooks/useThemeContext";

export const ThemeSwitcher = (): React.ReactNode => {
  const { toggleTheme } = useThemeContext();

  const handleThemeSwitch = (): void => {
    toggleTheme();
  };

  return (
    <div>
      <label
        className={styles.label}
        htmlFor="switcher"
      >
        <input
          className={styles.checkbox}
          type="checkbox"
          name="switcher"
          id="switcher"
          onClick={handleThemeSwitch}
        />
        <span className={styles.switcher}></span>
      </label>
    </div>
  );
};
