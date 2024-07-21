import React from "react";
import { Character } from "@/shared/types";
import { Outlet } from "react-router-dom";
import { CharacterCard } from "../characterCard/CharacterCard";
import styles from "./results.module.scss";

type Props = {
  result: Character[];
  closeOutlet: () => void;
};

export const Results = ({ result, closeOutlet }: Props): React.ReactNode => {
  const handleCloseOutlet = (): void => {
    closeOutlet();
  };

  return result.length === 0 ? (
    <h2>There is no results... Try something else</h2>
  ) : (
    <div
      data-testid="results"
      className={styles.result}
    >
      <div
        className={styles.result__wrapper}
        onClick={handleCloseOutlet}
      >
        {result.map((el, ind) => (
          <CharacterCard
            character={el}
            key={ind}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
