import React, { useEffect } from "react";
import { Main } from "../main/Main";
import { ErrorBoundary } from "../errorBoundary/ErrorBoundary";
import { Fallback } from "../errorBoundary/Fallback";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useNavigate, useParams } from "react-router-dom";

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
