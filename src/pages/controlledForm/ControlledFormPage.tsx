import { ReactHookForm } from "@/components/forms/ReactHookForm";
import { RootLayout } from "@/components/layouts/rootLayout/RootLayout";

export const ControlledFormPage = (): React.ReactNode => {
  return (
    <RootLayout>
      <section className="controlled-form">
        <header>
          <h2>controlled form</h2>
        </header>
        <ReactHookForm />
      </section>
    </RootLayout>
  );
};
