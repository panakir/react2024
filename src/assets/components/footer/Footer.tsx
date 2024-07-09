import { ReactNode } from "react";
import styles from "./footer.module.scss";

export const Footer = (): ReactNode => {
  return (
    <footer className={styles.footer}>
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
