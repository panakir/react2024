import React from "react";
import { ErrorBoundary } from "../layouts/errorBoundary/ErrorBoundary";
import { Fallback } from "../layouts/errorBoundary/Fallback";
import { Footer } from "../layouts/footer/Footer";
import { Header } from "../layouts/header/Header";
import { Main } from "../layouts/main/Main";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export const App = (): React.ReactNode => {
  return (
    <>
      <Header />
      <ErrorBoundary fallback={<Fallback />}>
        <Provider store={store}>
          <Main />
        </Provider>
      </ErrorBoundary>
      <Footer />
    </>
  );
};
