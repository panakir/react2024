import React from "react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Button } from "../elements/button/Button";
import styles from "./pagination.module.scss";

const PAGE_LIMIT = 10;

type Props = {
  qtyCharacters: number;
  currentPage: number;
  handlePreviousPage: (x: number) => void;
  handleSelectedPage: (x: number) => void;
  handleNextPage: (x: number) => void;
};

const calculateQtyPaginationButton = (
  qtyCharacters: number,
  pageLimit: number
): number => Math.ceil(qtyCharacters / pageLimit);

export const Pagination = (props: Props): React.ReactNode => {
  const { theme } = useThemeContext();
  const {
    qtyCharacters,
    currentPage,
    handleSelectedPage,
    handlePreviousPage,
    handleNextPage,
  } = props;

  const qtyPaginationButton = calculateQtyPaginationButton(
    qtyCharacters,
    PAGE_LIMIT
  );

  const handlePrevious = (): void => {
    handlePreviousPage(currentPage);
  };

  const handleNext = (): void => {
    handleNextPage(currentPage);
  };

  const handleSelected = (page: number): void => {
    handleSelectedPage(page);
  };

  return (
    <div
      data-testid="pagination"
      className={`${styles.pagination} ${theme}`}
    >
      <Button
        textContent="<"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        classes={styles.button}
      />

      {Array(qtyPaginationButton)
        .fill(null)
        .map((_, ind) => {
          if (+currentPage === ind + 1) {
            return (
              <Button
                textContent={`${ind + 1}`}
                key={ind}
                classes={styles.button}
                isActive={true}
              />
            );
          }
          return (
            <Button
              textContent={`${ind + 1}`}
              key={ind}
              onClick={() => handleSelected(ind + 1)}
              classes={styles.button}
            />
          );
        })}
      <Button
        textContent=">"
        onClick={handleNext}
        disabled={currentPage === qtyPaginationButton}
        classes={styles.button}
      />
    </div>
  );
};
