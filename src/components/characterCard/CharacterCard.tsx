import React from "react";
import styles from "./characterCard.module.scss";
import { Character } from "@/shared/types";
import { Link } from "@remix-run/react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "@/store/slices/selectItemsSlice";
import { RootState } from "@/store/store";
import { addDetailsCharacter } from "@/store/slices/charactersSlice";

type Props = {
  character: Character;
};

const getCharacterId = (url: string): string => {
  const splitUrl = url.split("/").reverse();
  const [, id] = splitUrl;
  return id;
};

export const CharacterCard = ({ character }: Props): React.ReactNode => {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectItem);
  const { theme } = useThemeContext();
  const { name, gender, birth_year, url } = character;
  const id = getCharacterId(url);

  const handleSelectItem = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (!event.target.checked) {
      dispatch(deleteItem(character));
    } else {
      dispatch(addItem(character));
    }
  };

  const handleDetailsClick = (): void => {
    dispatch(addDetailsCharacter(character));
  };

  const isSelected = selectedItems.some((item) => item.url === character.url);

  return (
    <div className={styles.card}>
      <label
        htmlFor={`selectCard-${id}`}
        className={styles.select}
      >
        <input
          checked={isSelected}
          type="checkbox"
          name="select-card"
          id={`selectCard-${id}`}
          onChange={(e) => handleSelectItem(e)}
        />
        select card
      </label>
      <p className={styles.text}>{name}</p>
      <p className={styles.text}>gender: {gender}</p>
      <p className={styles.text}>birth year: {birth_year}</p>
      <Link
        className={`${styles.link} ${theme === "dark" ? styles.dark : ""}`}
        to={`details/${id}`}
        onClick={handleDetailsClick}
      >
        show details
      </Link>
    </div>
  );
};
