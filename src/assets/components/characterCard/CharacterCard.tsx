import { Component } from "react";
import styles from "./characterCard.module.scss";
import { Character } from "../../share/types";

type Props = {
  character: Character;
};

export class CharacterCard extends Component<Props> {
  render(): JSX.Element {
    return (
      <div className={styles.card}>
        <p className={styles.text}>{this.props.character.name}</p>
        <p className={styles.text}>gender: {this.props.character.gender}</p>
        <p className={styles.text}>
          birth year: {this.props.character.birth_year}
        </p>
      </div>
    );
  }
}
