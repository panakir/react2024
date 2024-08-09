import React from "react";
import { render, screen } from "@testing-library/react";
import { NotFound } from "../../src/components/layouts/not-found/NotFound";

describe("testing Not Found page", () => {
  it("should render page", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
