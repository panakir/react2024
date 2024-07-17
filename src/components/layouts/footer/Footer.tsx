import React from "react";
import styles from "./footer.module.scss";
import { useThemeContext } from "@/hooks/useThemeContext";

export const Footer = (): React.ReactNode => {
  const { theme } = useThemeContext();
  return (
    <footer className={`${styles.footer} ${theme}`}>
      <div className={styles.info}>
        <a
          className={styles.link}
          href="https://github.com/panakir"
        >
          &copy;panakir,
        </a>
        <span>2024</span>
      </div>
      <a
        className={styles.logo}
        href="https://rs.school/"
        target="_blank"
      ></a>
    </footer>
  );
};
