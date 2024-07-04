import { Component } from "react";
import styles from "./results.module.scss";
import { Character } from "../../share/types";
import { CharacterCard } from "../characterCard/CharacterCard";

type Props = {
  result: Character[];
};

export class Results extends Component<Props> {
  render(): JSX.Element {
    return (
      <div className={styles.result}>
        {this.props.result.map((el, ind) => (
          <CharacterCard
            key={ind}
            character={el}
          />
        ))}
      </div>
    );
  }
}
