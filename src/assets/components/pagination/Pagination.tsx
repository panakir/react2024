import { ReactNode } from "react";
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

export const Pagination = (props: Props): ReactNode => {
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

  const handlePrevious = (page: number): void => {
    handlePreviousPage(page);
  };

  const handleNext = (page: number): void => {
    handleNextPage(page);
  };

  const handleSelected = (page: number): void => {
    handleSelectedPage(page);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={() => handlePrevious(currentPage)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {Array(qtyPaginationButton)
        .fill(null)
        .map((_, ind) => {
          if (+currentPage === ind + 1) {
            return (
              <button
                className={`${styles.button} ${styles.active}`}
                key={ind}
              >
                {ind + 1}
              </button>
            );
          }
          return (
            <button
              className={styles.button}
              key={ind}
              onClick={() => handleSelected(ind + 1)}
            >
              {ind + 1}
            </button>
          );
        })}
      <button
        className={styles.button}
        onClick={() => handleNext(currentPage)}
        disabled={currentPage === qtyPaginationButton}
      >
        &gt;
      </button>
    </div>
  );
};
