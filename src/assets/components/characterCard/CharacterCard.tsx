import { ReactNode } from "react";
import styles from "./characterCard.module.scss";
import { Character } from "../../shared/types";

type Props = {
  character: Character;
};

export const CharacterCard = (props: Props): ReactNode => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{props.character.name}</p>
      <p className={styles.text}>gender: {props.character.gender}</p>
      <p className={styles.text}>birth year: {props.character.birth_year}</p>
    </div>
  );
};
