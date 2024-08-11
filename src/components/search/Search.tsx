import React, { useState } from "react";
import { Button } from "../elements/button/Button";
import { ErrorButton } from "../layouts/errorBoundary/ErrorButton";
import styles from "./search.module.scss";
import { useDispatch } from "react-redux";
import { updatePage, updateQuery } from "@/store/slices/searchSlice";
import { getDataFromLocalStorage } from "@/utils/localStorage";

export const Search = (): React.ReactNode => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState(
    getDataFromLocalStorage("searchTerm")
  );

  const handleInputChange = (event: { target: { value: string } }): void => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButton = (): void => {
    dispatch(updateQuery(searchTerm));
    dispatch(updatePage("1"));
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        name="searchField"
        id="searchField"
        value={searchTerm}
        placeholder="Please, type your request here"
        onChange={handleInputChange}
      />
      <div className={styles.buttons}>
        <Button
          textContent="search"
          onClick={handleSearchButton}
        />
        <ErrorButton />
      </div>
    </div>
  );
};
