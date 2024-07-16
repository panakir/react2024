import { ReactNode } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Character } from "../../shared/types";
import styles from "./details.module.scss";

export const Details = (): ReactNode => {
  const navigate = useNavigate();
  const character = useLoaderData() as Character;

  return (
    <div className={`${styles.details} details`}>
      <div className={styles.info}>
        <h2 className={styles.title}>{character.name}</h2>
        <p className={styles.text}>height: {character.height} </p>
        <p className={styles.text}>mass: {character.mass}</p>
        <p className={styles.text}>gender: {character.gender}</p>
        <p className={styles.text}>birth year: {character.birth_year}</p>
      </div>
      <div
        className={styles.closeBtn}
        onClick={() => navigate("..", { replace: false })}
      ></div>
    </div>
  );
};
