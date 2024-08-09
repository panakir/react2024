"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Pagination } from "@/components/pagination/Pagination";
import { Results } from "@/components/results/Results";
import { Search } from "@/components/search/Search";
import { Character, ResponseFromApi } from "@/shared/types";
import { Flyout } from "@/components/flyout/Flyout";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

type MainProps = {
  data: ResponseFromApi;
  detailsData?: Character;
};

export const Main = ({ data, detailsData }: MainProps): React.ReactNode => {
  const query = useSelector((state: RootState) => state.search.query);
  const page = useSelector((state: RootState) => state.search.page);
  const router = useRouter();
  const { theme } = useThemeContext();
  const [searchResult, setSearchResult] = useState<Character[]>([]);
  const [qtyCharacters, setQtyCharacters] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useLayoutEffect(() => {
    if (data) {
      const { results, count } = data;
      setSearchResult(results);
      setQtyCharacters(count);
      setCurrentPage(+page);
    }
  }, [currentPage, data, page]);

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", page);
    query.length !== 0 ? params.set("search", query) : params.delete("search");
    const id = detailsData?.url.split("/").reverse()[1];
    if (id) {
      router.push(`/details/${id}?${params.toString()}`);
    } else {
      router.push(`?${params.toString()}`);
    }
  }, [page, query, detailsData]);

  return (
    <main className={theme}>
      <Pagination
        qtyCharacters={qtyCharacters}
        currentPage={currentPage}
      />
      <Search />
      <Results
        result={searchResult}
        detailsData={detailsData || null}
      />
      <Flyout />
    </main>
  );
};
