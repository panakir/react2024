import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../elements/button/Button";
import { deleteAllItems } from "@/store/slices/selectItemsSlice";
import styles from "./flyout.module.scss";
import { Character } from "@/shared/types";

export const Flyout = (): React.ReactNode => {
  const selectedItems = useSelector((state: RootState) => state.selectItem);
  const dispatch = useDispatch();

  const handleUnselect = (): void => {
    dispatch(deleteAllItems());
  };

  const convertToCSV = (selectedCharacter: Character[]): string => {
    const headers = ["Name", "gender", "height", "mass", "birth_year", "url"];

    const headersToString = headers.join(",");

    const row = selectedCharacter.map((character) =>
      [
        character.name,
        character.mass,
        character.height,
        character.gender,
        character.birth_year,
      ].join(",")
    );

    const csvContent = [headersToString, ...row].join("\n");
    return `data:text/csv;charset=utf-8,\uFEFF${encodeURIComponent(csvContent)}`;
  };

  const isEmpty = !selectedItems.length;

  return (
    <div className={`${styles.flyout} ${isEmpty ? styles.flyout_hidden : ""}`}>
      <p>Select {selectedItems.length} item(s)</p>
      <div style={{ display: "flex", gap: "1em" }}>
        <a
          className={styles.link}
          href={convertToCSV(selectedItems)}
          download={`${selectedItems.length}_characters.csv`}
        >
          download
        </a>
        <Button
          textContent="unselect all"
          onClick={handleUnselect}
        />
      </div>
    </div>
  );
};
