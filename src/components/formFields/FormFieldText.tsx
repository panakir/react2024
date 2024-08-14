import React from "react";
import { Input } from "../elements/input/Input";

type FormFieldPropsType = {
  name: string;
  inputType: string;
};

export const FormField = ({
  name,
  inputType,
}: FormFieldPropsType): React.ReactNode => {
  return (
    <>
      <label htmlFor="">{name}:</label>
      <Input type={inputType} />
    </>
  );
};
