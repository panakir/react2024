import React, { useState } from "react";
import { Button } from "../elements/button/Button";
import { ErrorButton } from "../layouts/errorBoundary/ErrorButton";
import styles from "./search.module.scss";

type Props = {
  handleSearch: () => void;
};

export const Search = ({ handleSearch }: Props): React.ReactNode => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") || ""
  );

  const handleInputChange = (event: { target: { value: string } }): void => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButton = (): void => {
    localStorage.setItem("searchTerm", searchTerm);
    handleSearch();
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
