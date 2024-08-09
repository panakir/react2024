"use client";

import { Button } from "@/components/elements/button/Button";
import styles from "./fallback.module.scss";
import { config } from "./fallback.config";
import { useThemeContext } from "@/hooks/useThemeContext";

export const Fallback = (): React.ReactNode => {
  const { text, title } = config;
  const { theme } = useThemeContext();

  const handleReload = (): void => {
    window.location.reload();
  };

  return (
    <div className={`${styles.fallback} ${theme}`}>
      <div className={styles.wrapper}>
        <p className={styles.text}>{text}</p>
        <h2 className={styles.title}>{title}</h2>
        <Button
          textContent="reload"
          onClick={handleReload}
        />
      </div>
    </div>
  );
};
