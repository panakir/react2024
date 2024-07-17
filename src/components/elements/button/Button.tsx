import React from "react";
import styles from "./button.module.scss";

type Props = {
  textContent: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onClick?: () => void;
  classes?: string;
  isActive?: boolean;
};

export const Button = ({
  textContent,
  type,
  disabled,
  onClick,
  isActive,
  classes,
}: Props): React.ReactNode => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : " "} ${classes ?? ""}`}
      type={type ?? "button"}
      disabled={disabled ?? false}
      onClick={onClick}
    >
      {textContent}
    </button>
  );
};
