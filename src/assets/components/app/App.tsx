import { ReactNode } from "react";
import { Main } from "../main/Main";
import { ErrorBoundary } from "../errorBoundary/ErrorBoundary";
import { Fallback } from "../errorBoundary/Fallback";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const App = (): ReactNode => {
  return (
    <>
      <Header />
      <ErrorBoundary fallback={<Fallback />}>
        <Main />
      </ErrorBoundary>
      <Footer />
    </>
  );
};
