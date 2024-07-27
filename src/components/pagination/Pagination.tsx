import React from "react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Button } from "../elements/button/Button";
import styles from "./pagination.module.scss";
import { useDispatch } from "react-redux";
import { updatePage } from "@/store/slices/searchSlice";
import { useNavigate } from "react-router-dom";

const PAGE_LIMIT = 10;

type Props = {
  qtyCharacters: number;
  currentPage: number;
};

const calculateQtyPaginationButton = (
  qtyCharacters: number,
  pageLimit: number
): number => Math.ceil(qtyCharacters / pageLimit);

export const Pagination = (props: Props): React.ReactNode => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const { qtyCharacters, currentPage } = props;

  const qtyPaginationButton = calculateQtyPaginationButton(
    qtyCharacters,
    PAGE_LIMIT
  );

  const handlePrevious = (): void => {
    const page = (currentPage - 1).toString();
    navigate(`../page/${page}`, { replace: true });
    dispatch(updatePage(page));
  };

  const handleNext = (): void => {
    const page = (currentPage + 1).toString();
    navigate(`../page/${page}`, { replace: true });
    dispatch(updatePage(page));
  };

  const handleSelected = (page: number): void => {
    navigate(`../page/${page}`, { replace: true });
    dispatch(updatePage(`${page}`));
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
