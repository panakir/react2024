import React from "react";
import styles from "./switcher.module.scss";

export const ThemeSwitcher = (): React.ReactNode => {
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
        />
        <span className={styles.switcher}></span>
      </label>
    </div>
  );
};
