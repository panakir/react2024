import React from "react";
import styles from "./autoComplete.module.scss";

const AutoCompleteComponent = ({
  visible,
  countries,
  onSelect,
}: {
  visible: boolean;
  countries: string[] | null;
  onSelect: (event: React.MouseEvent<HTMLElement>) => void;
}): React.ReactNode => {
  return (
    <ul
      className={`${styles.autoComplete} ${visible ? "visible" : "invisible"}`}
    >
      {countries &&
        countries.map((country, i) => (
          <li
            onClick={onSelect}
            key={i}
            className={styles.country}
          >
            <p>{country}</p>
          </li>
        ))}
    </ul>
  );
};

export { AutoCompleteComponent };
