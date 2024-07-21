import { Character } from "@/shared/types";
import React from "react";
import styles from "./details.module.scss";
import { useNavigate, useLoaderData } from "react-router-dom";

export const Details = (): React.ReactNode => {
  const navigate = useNavigate();
  const { name, height, mass, gender, birth_year } =
    useLoaderData() as Character;

  const handleCloseBtn = (): void => {
    navigate("..", { replace: false });
  };

  return (
    <div className={`${styles.details} details`}>
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.text}>height: {height} </p>
        <p className={styles.text}>mass: {mass}</p>
        <p className={styles.text}>gender: {gender}</p>
        <p className={styles.text}>birth year: {birth_year}</p>
      </div>
      <div
        data-testid="details-close-btn"
        className={styles.closeBtn}
        onClick={handleCloseBtn}
      ></div>
    </div>
  );
};
