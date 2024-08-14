import React from "react";
import { FormField } from "../formFields/FormFieldText";
import styles from "./form.module.scss";
import { FormFieldGender } from "../formFields/FormFieldGender";
import { Input } from "../elements/input/Input";

export const Form = (): React.ReactNode => {
  return (
    <>
      <form className={styles.form}>
        <FormField
          name="name"
          inputType="text"
        />
        <FormField
          name="age"
          inputType="number"
        />
        <FormField
          name="email"
          inputType="email"
        />
        <FormField
          name="password"
          inputType="password"
        />
        <FormField
          name="password-confirm"
          inputType="password"
        />
        <FormFieldGender name="gender" />

        <FormField
          name="upload"
          inputType="file"
        />
        <Input
          type="submit"
          value="submit"
        />
      </form>
    </>
  );
};
