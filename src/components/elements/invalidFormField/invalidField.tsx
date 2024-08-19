import styles from "./invalid.module.scss";

export const InvalidField = ({
  message,
}: {
  message: string;
}): React.ReactNode => {
  return <p className={styles.invalid}>{message}</p>;
};
