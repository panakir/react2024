import { ReactNode, useCallback, useEffect, useState } from "react";
import { Search } from "../search/Search";
import { Results } from "../results/Results";
import { Character } from "../../shared/types";
import { getAllCharacters, getFilteredCharacters } from "../../shared/api";

export const Main = (): ReactNode => {
  const [searchResult, setSearchResult] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchRequest = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    const query = localStorage.getItem("searchTerm");
    if (query) {
      const filteredCharacters = await getFilteredCharacters(query);
      setSearchResult(filteredCharacters);
      setIsLoading(false);
    } else {
      const characters = await getAllCharacters();
      setSearchResult(characters);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleSearchRequest();
  }, [handleSearchRequest]);

  return (
    <main>
      <Search handleSearch={handleSearchRequest} />
      {isLoading ? (
        <div className="loader">
          <img
            src="./loader.gif"
            alt="Loader image"
          />
          loading...
        </div>
      ) : (
        <Results result={searchResult} />
      )}
    </main>
  );
};
