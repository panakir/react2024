import { ReactNode } from "react";
import styles from "./results.module.scss";
import { Character } from "../../shared/types";
import { CharacterCard } from "../characterCard/CharacterCard";

type Props = {
  result: Character[];
};

export const Results = ({ result }: Props): ReactNode => {
  return (
    <div className={styles.result}>
      {result.map((el, ind) => (
        <CharacterCard
          key={ind}
          character={el}
        />
      ))}
    </div>
  );
};
