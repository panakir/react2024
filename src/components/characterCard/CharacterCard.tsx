import React from "react";
import styles from "./characterCard.module.scss";
import { Character } from "@/shared/types";
import { Link } from "react-router-dom";

type Props = {
  character: Character;
};

const getCharacterId = (url: string): string => {
  const splitUrl = url.split("/").reverse();
  const [, id] = splitUrl;
  return id;
};

export const CharacterCard = ({ character }: Props): React.ReactNode => {
  const id = getCharacterId(character.url);
  return (
    <Link
      className={styles.link}
      to={`details/${id}`}
    >
      <div className={styles.card}>
        <p className={styles.text}>{character.name}</p>
        <p className={styles.text}>gender: {character.gender}</p>
        <p className={styles.text}>birth year: {character.birth_year}</p>
      </div>
    </Link>
  );
};
