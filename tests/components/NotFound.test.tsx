import { render, screen } from "@testing-library/react";
import { NotFound } from "../../src/assets/components/not-found/NotFound";

describe("testing Not Found page", () => {
  it("should render page", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
