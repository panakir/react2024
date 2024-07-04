import { Component } from "react";
import { Search } from "../search/Search";
import { Results } from "../results/Results";
import { Character } from "../../share/types";

interface State {
  searchResult: Character[];
  isLoading: boolean;
  hasError: boolean;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

export class Main extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchResult: [],
      isLoading: false,
      hasError: false,
    };
  }

  getFilteredCharacters = async (query: string): Promise<Character[]> => {
    const response = await fetch(`${BASE_URL}?search=${query} `)
      .then((res) => res.json())
      .then((data) => data.results)
      .catch((error) => {
        throw new Error(error.message);
      });

    return response;
  };

  getAllCharacters = async (): Promise<Character[]> => {
    const response = await fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => data.results)
      .catch((error) => {
        throw new Error(error.message);
      });

    return response;
  };

  componentDidMount(): void {
    this.handleSearchRequest();
  }

  handleSearchRequest = async (): Promise<void> => {
    this.setState({ isLoading: true });
    const query = localStorage.getItem("searchTerm");
    if (query) {
      const filteredCharacters = await this.getFilteredCharacters(query);
      this.setState({
        searchResult: filteredCharacters,
        isLoading: false,
      });
    } else {
      const characters = await this.getAllCharacters();
      this.setState({
        searchResult: characters,
        isLoading: false,
      });
    }
  };

  render(): JSX.Element {
    return (
      <>
        <Search handleSearch={this.handleSearchRequest} />
        {this.state.isLoading ? (
          <img
            src="./loader.gif"
            alt="Loader image"
          />
        ) : (
          <Results result={this.state.searchResult} />
        )}
      </>
    );
  }
}
