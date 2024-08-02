import React from "react";
import styles from "./details.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "@/store/api/swapiAPi";
import { Loader } from "../elements/loader/Loader";

export const Details = (): React.ReactNode => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: character, isLoading } = useGetCharacterByIdQuery(id ?? "");

  const handleCloseBtn = (): void => {
    navigate("..");
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={`${styles.details} details`}>
      <div className={styles.info}>
        <h2 className={styles.title}>{character?.name}</h2>
        <p className={styles.text}>height: {character?.height} </p>
        <p className={styles.text}>mass: {character?.mass}</p>
        <p className={styles.text}>gender: {character?.gender}</p>
        <p className={styles.text}>birth year: {character?.birth_year}</p>
      </div>
      <div
        data-testid="details-close-btn"
        className={styles.closeBtn}
        onClick={handleCloseBtn}
      ></div>
    </div>
  );
};
