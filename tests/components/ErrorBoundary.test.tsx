import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ErrorBoundary } from "@/components/layouts/errorBoundary/ErrorBoundary";
import { Fallback } from "@/components/layouts/errorBoundary/Fallback";
import { ThemeProvider } from "@/context/ThemeContext";

vi.mock("./Fallback", () => ({
  Fallback: () => <div data-testid="fallback">Something went wrong</div>,
}));

const ProblematicComponent = () => {
  throw new Error("Test Error");
};

describe("ErrorBoundary", () => {
  it("should render children when no error is thrown", () => {
    render(
      <ErrorBoundary fallback={<Fallback />}>
        <div data-testid="child">Child component</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("should render fallback component when an error is thrown", async () => {
    render(
      <ThemeProvider>
        <ErrorBoundary fallback={<Fallback />}>
          <ProblematicComponent />
        </ErrorBoundary>
      </ThemeProvider>
    );

    expect(ProblematicComponent).toThrowError();
    expect(screen.getByText(/oops/i)).toBeInTheDocument();
  });
});
