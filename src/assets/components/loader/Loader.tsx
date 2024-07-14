import React from "react";

export const Loader = (): React.ReactNode => {
  return (
    <div className="loader">
      <img
        src="../loader.gif"
        alt="Loader image"
      />
      <p>loading...</p>
    </div>
  );
};
