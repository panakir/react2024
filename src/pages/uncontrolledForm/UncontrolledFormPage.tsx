import { UncontrolledForm } from "@/components/forms/UncontrolledForm";
import { RootLayout } from "@/components/layouts/rootLayout/RootLayout";

export const UncontrolledFormPage = (): React.ReactNode => {
  return (
    <RootLayout>
      <section className="uncontrolled-form">
        <header>
          <h2>uncontrolled form</h2>
        </header>
        <UncontrolledForm />
      </section>
    </RootLayout>
  );
};
