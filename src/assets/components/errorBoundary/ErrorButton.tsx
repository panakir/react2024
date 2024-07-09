import { ReactNode, useState } from "react";

export const ErrorButton = (): ReactNode => {
  const [hasError, setHasError] = useState(false);

  const handlerErrorButton = (): void => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error("Oops!");
  }

  return <button onClick={handlerErrorButton}> throw error </button>;
};
