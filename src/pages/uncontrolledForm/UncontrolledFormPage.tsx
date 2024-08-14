import { UncontrolledForm } from "@/components/forms/UncontrolledForm";

export const UncontrolledFormPage = (): React.ReactNode => {
  return (
    <section className="uncontrolled-form">
      <header>
        <h2>uncontrolled form</h2>
      </header>
      <UncontrolledForm />
    </section>
  );
};
