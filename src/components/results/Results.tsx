import React from "react";
import { Character } from "@/shared/types";
import { CharacterCard } from "../characterCard/CharacterCard";
import styles from "./results.module.scss";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { Details } from "../details/Details";

type Props = {
  result: Character[];
  detailsData: Character | null;
};

export const Results = ({ result, detailsData }: Props): React.ReactNode => {
  const params = useParams();
  const router = useRouter();
  const handleCloseDetails = (): void => {
    if (params.id) {
      router.back();
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
        onClick={handleCloseDetails}
      >
        {result.map((el, ind) => (
          <CharacterCard
            character={el}
            key={ind}
          />
        ))}
      </div>
      {detailsData ? <Details /> : null}
    </div>
  );
};
