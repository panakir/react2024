import { render, screen } from "@testing-library/react";
import { Fallback } from "../../src/components/layouts/errorBoundary/Fallback";

describe("testing Fallback component", () => {
  it("should be rendered with reload button", () => {
    render(<Fallback />);
    expect(screen.getByRole("button", { name: /reload/i })).toBeInTheDocument();
  });
});
