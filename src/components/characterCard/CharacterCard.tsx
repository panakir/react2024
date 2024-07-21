import React from "react";
import styles from "./characterCard.module.scss";
import { Character } from "@/shared/types";
import { Link } from "react-router-dom";
import { useThemeContext } from "@/hooks/useThemeContext";

type Props = {
  character: Character;
};

const getCharacterId = (url: string): string => {
  const splitUrl = url.split("/").reverse();
  const [, id] = splitUrl;
  return id;
};

export const CharacterCard = ({ character }: Props): React.ReactNode => {
  const { theme } = useThemeContext();
  const { name, gender, birth_year, url } = character;
  const id = getCharacterId(url);
  return (
    <Link
      className={`${styles.link} ${theme === "dark" ? styles.dark : ""}`}
      to={`details/${id}`}
    >
      <div className={styles.card}>
        <p className={styles.text}>{name}</p>
        <p className={styles.text}>gender: {gender}</p>
        <p className={styles.text}>birth year: {birth_year}</p>
      </div>
    </Link>
  );
};
