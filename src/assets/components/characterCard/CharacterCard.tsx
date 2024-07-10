import { ReactNode } from "react";
import styles from "./characterCard.module.scss";
import { Character } from "../../shared/types";
import { Link } from "react-router-dom";

type Props = {
  character: Character;
};

const getCharacterId = (url: string): string => {
  const splitUrl = url.split("/").reverse();
  const [, id] = splitUrl;
  return id;
};

export const CharacterCard = (props: Props): ReactNode => {
  const id = getCharacterId(props.character.url);
  return (
    <Link
      className={styles.link}
      to={`details/${id}`}
    >
      <div className={styles.card}>
        <p className={styles.text}>{props.character.name}</p>
        <p className={styles.text}>gender: {props.character.gender}</p>
        <p className={styles.text}>birth year: {props.character.birth_year}</p>
      </div>
    </Link>
  );
};
