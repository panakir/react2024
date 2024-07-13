import { ReactNode } from "react";

export const Loader = (): ReactNode => {
  return (
    <div className="loader">
      <img
        src="../loader.gif"
        alt="Loader image"
      />
      loading...
    </div>
  );
};
