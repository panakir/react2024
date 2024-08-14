import { FormEvent } from "react";
import styles from "./form.module.scss";

export const ReactHookForm = (): React.ReactNode => {
  const handleSubmit = (event: FormEvent): void => {
    event?.preventDefault();
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className={styles.form}
    >
      <div className={`${styles.form__field} ${styles.form__field_name}`}>
        <label htmlFor="username">name: </label>
        <input
          className={styles.form__input}
          type="text"
          id="username"
        />
      </div>
      <div className={`${styles.form__field} ${styles.form__field_age}`}>
        <label htmlFor="age">age: </label>
        <input
          className={styles.form__input}
          type="number"
          id="age"
        />
      </div>
      <div className={`${styles.form__field} ${styles.form__field_email}`}>
        <label htmlFor="email">email: </label>
        <input
          className={styles.form__input}
          type="email"
          id="email"
        />
      </div>
      <div className={`${styles.form__field} ${styles.form__field_password}`}>
        <label htmlFor="password">password: </label>
        <input
          className={styles.form__input}
          type="password"
          id="password"
        />
      </div>
      <div className={`${styles.form__field} ${styles.form__field_password}`}>
        <label htmlFor="confirmPassword">confirm password: </label>
        <input
          className={styles.form__input}
          type="password"
          id="confirmPassword"
        />
      </div>
      <div className={`${styles.form__field} ${styles.form__field_gender}`}>
        <p>Gender: </p>
        <label htmlFor="man">
          <input
            className={styles.form__input}
            type="radio"
            id="man"
            name="gender"
          />
          man
        </label>
        <label htmlFor="woman">
          <input
            className={styles.form__input}
            type="radio"
            id="woman"
            name="gender"
          />
          woman
        </label>
        <label htmlFor="other">
          <input
            className={styles.form__input}
            type="radio"
            id="other"
            name="gender"
          />
          other
        </label>
      </div>
      <div className={`${styles.form__field} ${styles.form__field_upload}`}>
        <label htmlFor="uploadImage">upload image:</label>

        <input
          className={styles.form__input}
          type="file"
          id="uploadImage"
        />
      </div>
      <div className={`${styles.form__field} ${styles.form__field_accept}`}>
        <input
          className={styles.form__input}
          type="checkbox"
          id="accept"
        />
        <label htmlFor="accept">accept Terms and Conditions agreement</label>
      </div>
      <input
        className={styles.form__input}
        type="submit"
        value={"submit"}
      />
    </form>
  );
};
