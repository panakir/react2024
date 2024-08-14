import { ReactHookForm } from "@/components/forms/ReactHookForm";

export const ControlledFormPage = (): React.ReactNode => {
  return (
    <section className="controlled-form">
      <header>
        <h2>controlled form</h2>
      </header>
      <ReactHookForm />
    </section>
  );
};
