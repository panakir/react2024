import React from "react";
import { Character } from "@/shared/types";
import { CharacterCard } from "../characterCard/CharacterCard";
import styles from "./results.module.scss";
import { Outlet, useParams, useNavigate } from "@remix-run/react";

type Props = {
  result: Character[];
};

export const Results = ({ result }: Props): React.ReactNode => {
  const params = useParams();
  const navigate = useNavigate();

  const handleCloseOutlet = (): void => {
    if (params.id) {
      navigate(-1);
    }
  };

  if (!result.length) {
    return <h2>There is no results... Try something else</h2>;
  }

  return (
    <div
      data-testid="results"
      className={styles.result}
    >
      <div
        className={styles.result__wrapper}
        onClick={handleCloseOutlet}
      >
        {result.map((el, ind) => (
          <CharacterCard
            character={el}
            key={ind}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
