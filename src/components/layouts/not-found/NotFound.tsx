import React from "react";
import styles from "./not-found.module.scss";

export const NotFound = (): React.ReactNode => {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.title}> You lost your own way</h2>
      <p className={styles.text}> Page Not Found 404 </p>
    </div>
  );
};
