import React, { useState } from "react";
import { Button } from "@/components/elements/button/Button";

export const ErrorButton = (): React.ReactNode => {
  const [hasError, setHasError] = useState(false);

  const handlerErrorButton = (): void => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error("Oops!");
  }

  return (
    <Button
      textContent="throw error"
      onClick={handlerErrorButton}
    />
  );
};
