import React from "react";
import styles from "./loader.module.scss";

export const Loader = (): React.ReactNode => {
  return (
    <div className={styles.loader}>
      <img
        src="/images/loader.gif"
        alt="Loader image"
      />
      <p>loading...</p>
    </div>
  );
};
