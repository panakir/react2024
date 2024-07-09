import { ReactNode } from "react";
import styles from "./fallback.module.scss";

export const Fallback = (): ReactNode => {
  return (
    <div className={styles.fallback}>
      <p className={styles.text}>
        Oops! Something went wrong! Please, reload website!
      </p>
      <h2 className={styles.title}>May the Force be with you</h2>
      <button onClick={() => window.location.reload()}>reload</button>
    </div>
  );
};
