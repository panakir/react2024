import React, { useEffect } from "react";

import { Header } from "../layouts/header/Header";
import { Footer } from "../layouts/footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { Main } from "../layouts/main/Main";
import { ErrorBoundary } from "../layouts/errorBoundary/ErrorBoundary";
import { Fallback } from "../layouts/errorBoundary/Fallback";

export const App = (): React.ReactNode => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const currentPage = parseInt(pageId ?? "1", 10);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(`/page/${currentPage}`, { replace: true });
    }
  }, [currentPage, navigate]);

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
