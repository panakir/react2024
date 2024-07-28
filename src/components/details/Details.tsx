import React from "react";
import styles from "./details.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const Details = (): React.ReactNode => {
  const navigate = useNavigate();
  const character = useSelector((state: RootState) => state.characters.details);
  const { name, height, birth_year, gender, mass } = character;

  const handleCloseBtn = (): void => {
    navigate("..");
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
