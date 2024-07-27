import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "../layouts/errorBoundary/ErrorBoundary";
import { Fallback } from "../layouts/errorBoundary/Fallback";
import { Footer } from "../layouts/footer/Footer";
import { Header } from "../layouts/header/Header";
import { Main } from "../layouts/main/Main";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export const App = (): React.ReactNode => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const currentPage = +(pageId || 1);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(`/page/${currentPage}`, { replace: true });
    }
  }, [currentPage, navigate]);

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
