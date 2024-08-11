import React, { useEffect, useState } from "react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Pagination } from "@/components/pagination/Pagination";
import { Results } from "@/components/results/Results";
import { Search } from "@/components/search/Search";
import { Character, ResponseFromApi } from "@/shared/types";
import { Flyout } from "@/components/flyout/Flyout";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useSearchParams } from "@remix-run/react";

type MainPageProps = {
  data: ResponseFromApi;
  detailsData?: Character;
};

export const Main = ({ data, detailsData }: MainPageProps): React.ReactNode => {
  const query = useSelector((state: RootState) => state.search.query);
  const page = useSelector((state: RootState) => state.search.page);

  const { theme } = useThemeContext();
  const [searchResult, setSearchResult] = useState<Character[]>([]);
  const [qtyCharacters, setQtyCharacters] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (data) {
      const { results, count } = data;
      setSearchResult(results);
      setQtyCharacters(count);
      setCurrentPage(+page);
    }
  }, [currentPage, data, page]);

  useEffect(() => {
    query ? params.set("search", query) : params.delete("search");
    params.set("page", page);
    setParams(params);
  }, [page, query]);

  return (
    <main className={theme}>
      <Pagination
        qtyCharacters={qtyCharacters}
        currentPage={currentPage}
      />

      <Search />

      <Results
        result={searchResult}
        details={detailsData ? detailsData : null}
      />

      <Flyout />
    </main>
  );
};
