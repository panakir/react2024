import { ReactNode } from "react";
import styles from "./results.module.scss";
import { Character } from "../../shared/types";
import { CharacterCard } from "../characterCard/CharacterCard";
import { Outlet, useNavigate, useParams } from "react-router-dom";

type Props = {
  result: Character[];
};

export const Results = ({ result }: Props): ReactNode => {
  const navigate = useNavigate();
  const params = useParams();
  const handleCloseOutlet = (): void => {
    if (params.id) {
      navigate("..");
    }
  };

  return (
    <div className={styles.result}>
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
