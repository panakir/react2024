import { useEffect, useState } from "react";

export const useLocalStorage = (): [string, (query: string) => void] => {
  const [query, setQuery] = useState(
    () => localStorage.getItem("searchTerm") ?? ""
  );

  useEffect(() => {
    localStorage.setItem("searchTerm", query);
  }, [query]);

  return [query, setQuery];
};
