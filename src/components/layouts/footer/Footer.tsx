import React from "react";
import styles from "./footer.module.scss";
import { useThemeContext } from "@/hooks/useThemeContext";
import { config } from "./footer.config";

export const Footer = (): React.ReactNode => {
  const { theme } = useThemeContext();
  const { nickname, year } = config;

  return (
    <footer className={`${styles.footer} ${theme}`}>
      <div className={styles.info}>
        <a
          className={styles.link}
          href="https://github.com/panakir"
        >
          &copy;{nickname},
        </a>
        <span>{year}</span>
      </div>
      <a
        className={styles.logo}
        href="https://rs.school/"
        target="_blank"
      ></a>
    </footer>
  );
};
