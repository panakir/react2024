import React from "react";
import { Button } from "@/components/elements/button/Button";
import styles from "./fallback.module.scss";

export const Fallback = (): React.ReactNode => {
  return (
    <div className={styles.fallback}>
      <p className={styles.text}>
        Oops! Something went wrong! Please, reload website!
      </p>
      <h2 className={styles.title}>May the Force be with you</h2>
      <Button
        textContent="reload"
        onClick={() => window.location.reload()}
      />
    </div>
  );
};
