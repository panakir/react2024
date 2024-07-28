import React from "react";
import styles from "./button.module.scss";
import { useThemeContext } from "@/hooks/useThemeContext";

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
  const { theme } = useThemeContext();

  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : " "} ${classes ?? ""} 
      ${theme === "dark" ? styles.dark : ""}`}
      type={type ?? "button"}
      disabled={disabled ?? false}
      onClick={onClick}
    >
      {textContent}
    </button>
  );
};
