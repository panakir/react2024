import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ErrorPage from "@/pages/500";

vi.mock("@/components/layouts/errorBoundary/Fallback", () => ({
  Fallback: () => <div data-testid="fallback">Error occurred</div>,
}));

describe("ErrorPage Component", () => {
  it("should render the Fallback component", () => {
    render(<ErrorPage />);

    expect(screen.getByTestId("fallback")).toBeInTheDocument();
    expect(screen.getByText("Error occurred")).toBeInTheDocument();
  });
});
