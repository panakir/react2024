import { Character } from "@/shared/types";
import React from "react";
import styles from "./details.module.scss";
import { useNavigate, useLoaderData } from "react-router-dom";

export const Details = (): React.ReactNode => {
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
        data-testid="details-close-btn"
        className={styles.closeBtn}
        onClick={() => navigate("..", { replace: false })}
      ></div>
    </div>
  );
};
