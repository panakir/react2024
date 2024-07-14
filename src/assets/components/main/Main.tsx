import { ReactNode, useCallback, useEffect, useState } from "react";
import { Search } from "../search/Search";
import { Results } from "../results/Results";
import { Character } from "../../shared/types";
import { getAllCharacters, getFilteredCharacters } from "../../shared/api";
import { Pagination } from "../pagination/Pagination";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../loader/Loader";

export const Main = (): ReactNode => {
  const [searchResult, setSearchResult] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [qtyCharacters, setQtyCharacters] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const params = useParams();

  const handleSearchRequest = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    const query = localStorage.getItem("searchTerm") ?? "";

    if (query) {
      const filteredCharacters = await getFilteredCharacters(
        query,
        currentPage
      );

      setSearchResult(filteredCharacters.results);
      setQtyCharacters(filteredCharacters.count);
      setIsLoading(false);
    } else {
      const characters = await getAllCharacters(`${currentPage}`);
      setQtyCharacters(characters.count);
      setSearchResult(characters.results);
      setIsLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    handleSearchRequest();
  }, [handleSearchRequest]);

  const handleSelectedPage = (page: number): void => {
    navigate(`../page/${page}`, { replace: true });
    setCurrentPage(page);
  };

  const handlePreviousPage = (page: number): void => {
    navigate(`../page/${page - 1}`, { replace: true });
    setCurrentPage(page - 1);
  };
  const handleNextPage = (page: number): void => {
    navigate(`../page/${page + 1}`, { replace: true });
    setCurrentPage(page + 1);
  };

  const handleCloseOutlet = (): void => {
    if (params.id) {
      navigate(-1);
    }
  };

  return (
    <main>
      <Pagination
        qtyCharacters={qtyCharacters}
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handleSelectedPage={handleSelectedPage}
        handleNextPage={handleNextPage}
      />
      <Search handleSearch={handleSearchRequest} />
      {isLoading ? (
        <Loader />
      ) : (
        <Results
          result={searchResult}
          closeOutlet={handleCloseOutlet}
        />
      )}
    </main>
  );
};
