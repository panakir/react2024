import { config } from "./footer.config";
import styles from "./footer.module.scss";

export const Footer = (): React.ReactNode => {
  const { nickname, year } = config;

  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <a href="https://github.com/panakir">&copy;{nickname},</a>
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
