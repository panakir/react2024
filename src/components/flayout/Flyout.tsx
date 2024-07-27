import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../elements/button/Button";
import { deleteAllItems } from "@/store/slices/selectItemsSlice";
import styles from "./flyout.module.scss";

export const Flyout = (): React.ReactNode => {
  const selectedItems = useSelector((state: RootState) => state.selectItem);
  const dispatch = useDispatch();

  const handleUnselect = (): void => {
    dispatch(deleteAllItems());
  };

  const handleDownloadSelectedItems = (): void => {
    const blob = new Blob([JSON.stringify(selectedItems)]);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${selectedItems.length}_characters.csv`;
    document.body.append(link);
    link.style.display = "none";
    link.click();
    link.remove();
  };

  const isEmpty = !selectedItems.length;

  return (
    <div className={`${styles.flyout} ${isEmpty ? styles.flyout_hidden : ""}`}>
      <p>Select {selectedItems.length} item(s)</p>
      <div style={{ display: "flex", gap: "1em" }}>
        <Button
          textContent="download"
          onClick={handleDownloadSelectedItems}
        />
        <Button
          textContent="unselect all"
          onClick={handleUnselect}
        />
      </div>
    </div>
  );
};
