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
        This is CharacterCard component {this.props.character.name}
      </div>
    );
  }
}
