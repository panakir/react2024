import React from "react";
import { Form } from "@/components/Form/Form";

export const UncontrolledForm = (): React.ReactNode => {
  return (
    <section className="uncontrolled-form">
      <header>
        <h2>uncontrolled form</h2>
      </header>
      <Form />
    </section>
  );
};
