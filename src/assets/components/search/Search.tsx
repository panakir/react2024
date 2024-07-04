import { Component } from "react";
import styles from "./search.module.scss";
import { ErrorButton } from "../errorBoundary/ErrorButton";

type Props = {
  handleSearch: () => void;
};

type State = {
  searchTerm: string;
};

export class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem("searchTerm") || "",
    };
  }

  handleInputChange = (event: { target: { value: string } }): void => {
    localStorage.setItem("searchTerm", event.target.value);
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleSearchButton = (): void => {
    this.props.handleSearch();
  };

  render(): JSX.Element {
    return (
      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          name="searchField"
          id="searchField"
          value={this.state.searchTerm}
          placeholder="Please, type your request here"
          onChange={this.handleInputChange}
        />
        <div className={styles.buttons}>
          <button
            type="button"
            onClick={this.handleSearchButton}
          >
            search
          </button>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
