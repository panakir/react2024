import { CardPropsType } from "@/core/types";
import styles from "./card.module.scss";

export const Card = ({ form, last }: CardPropsType): React.ReactNode => {
  const { name, age, email, gender, uploadImage, accept, country } = form;

  return (
    <div className={`${styles.card} ${last ? styles.last : ""}`}>
      <header className={styles.card__header}>
        <div className={styles.card__image}>
          <img
            src={uploadImage}
            alt="avatar"
          />
        </div>
        <div className={styles.card__text}>
          <h3>Name: {name}</h3>
          <p>Email: {email}</p>
          <p>Country: {country}</p>
        </div>
      </header>
      <div>
        <p>{`Age: ${age} years`}</p>
        <p>Gender: {gender}</p>
        <p>Accept : {`${accept}`}</p>
      </div>
    </div>
  );
};
