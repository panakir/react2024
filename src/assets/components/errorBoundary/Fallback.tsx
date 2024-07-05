import { Component } from "react";
import styles from "./fallback.module.scss";

export class Fallback extends Component {
  render(): JSX.Element {
    return (
      <div className={styles.fallback}>
        <p className={styles.text}>
          Oops! Something went wrong! Please, reload website!
        </p>
        <h2 className={styles.title}>May the Force be with you</h2>
        <button onClick={() => window.location.reload()}>reload</button>
      </div>
    );
  }
}
