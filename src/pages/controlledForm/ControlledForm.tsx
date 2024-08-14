import React from "react";
import { Form } from "@/components/Form/Form";

export const ControlledForm = (): React.ReactNode => {
  return (
    <section className="controlled-form">
      <header>
        <h2>controlled form</h2>
      </header>
      <Form />
    </section>
  );
};
