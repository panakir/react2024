import React from "react";
import { ErrorBoundary } from "@/components/layouts/errorBoundary/ErrorBoundary";
import { Fallback } from "@/components/layouts/errorBoundary/Fallback";

const ErrorPage = (): React.ReactNode => {
  return <ErrorBoundary fallback={<Fallback />} />;
};

export default ErrorPage;
