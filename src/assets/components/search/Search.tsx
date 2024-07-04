import { Component } from "react";
import "./search.module.scss";

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
      <>
        <input
          type="text"
          name="searchField"
          id="searchField"
          value={this.state.searchTerm}
          placeholder="Please, type your request here"
          onChange={this.handleInputChange}
        />
        <button
          type="button"
          onClick={this.handleSearchButton}
        >
          search
        </button>
      </>
    );
  }
}
