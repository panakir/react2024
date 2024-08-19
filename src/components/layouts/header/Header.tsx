import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = (): React.ReactNode => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <NavLink to="/">home</NavLink>
          <NavLink to="/controlled-form">controlled Form</NavLink>
          <NavLink to="/uncontrolled-form">uncontrolled Form</NavLink>
        </nav>
      </header>
    </>
  );
};
