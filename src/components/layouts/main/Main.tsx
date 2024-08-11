import React, { useEffect, useState } from "react";
import { useSearchParams } from "@remix-run/react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Pagination } from "@/components/pagination/Pagination";
import { Results } from "@/components/results/Results";
import { Search } from "@/components/search/Search";
import { Character, ResponseFromApi } from "@/shared/types";
import { Flyout } from "@/components/flyout/Flyout";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type MainPageProps = {
  data: ResponseFromApi;
};

export const Main = ({ data }: MainPageProps): React.ReactNode => {
  const query = useSelector((state: RootState) => state.search.query);
  const page = useSelector((state: RootState) => state.search.page);

  const { theme } = useThemeContext();
  const [searchResult, setSearchResult] = useState<Character[]>([]);
  const [qtyCharacters, setQtyCharacters] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (data) {
      const { results, count } = data;
      setSearchResult(results);
      setQtyCharacters(count);
      setCurrentPage(+page);
    }
    return (): void => {
      if (query) {
        searchParams.set("search", query);
      }
      searchParams.set("page", page);
      setSearchParams(searchParams);
    };
  }, [currentPage, data, page, query, searchParams, setSearchParams]);

  return (
    <main className={theme}>
      <Pagination
        qtyCharacters={qtyCharacters}
        currentPage={currentPage}
      />
      <Search />
      <Results result={searchResult} />
      <Flyout />
    </main>
  );
};
