import React, { useEffect, useState } from "react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Loader } from "@/components/elements/loader/Loader";
import { Pagination } from "@/components/pagination/Pagination";
import { Results } from "@/components/results/Results";
import { Search } from "@/components/search/Search";
import { Character } from "@/shared/types";
import { Flyout } from "@/components/flyout/Flyout";
import { useGetCharactersQuery } from "@/store/api/swapiAPi";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";

export const Main = (): React.ReactNode => {
  const query = useSelector((state: RootState) => state.search.query);
  const page = useSelector((state: RootState) => state.search.page);

  const { data, isFetching, error } = useGetCharactersQuery({
    query,
    page,
  });

  const { theme } = useThemeContext();
  const [searchResult, setSearchResult] = useState<Character[]>([]);
  const [qtyCharacters, setQtyCharacters] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const handleUrlQuery = (): void => {
    const params = new URLSearchParams();
    params.set("page", page);
    if (query) {
      params.set("search", query);
    }
    router.replace(`${router.pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (data) {
      const { results, count } = data;
      setSearchResult(results);
      setQtyCharacters(count);
      setCurrentPage(+page);
    }
    return handleUrlQuery();
  }, [currentPage, data, page]);

  return (
    <main className={theme}>
      <Pagination
        qtyCharacters={qtyCharacters}
        currentPage={currentPage}
      />
      <Search />
      {error ? (
        <>Oops!</>
      ) : isFetching ? (
        <Loader />
      ) : (
        <Results result={searchResult} />
      )}
      <Flyout />
    </main>
  );
};
