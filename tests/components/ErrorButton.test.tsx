import { render, screen } from "@testing-library/react";
import { ErrorButton } from "../../src/assets/components/errorBoundary/ErrorButton";
import { ErrorBoundary } from "../../src/assets/components/errorBoundary/ErrorBoundary";

describe("testing Error button component", () => {
  it("should render button", () => {
    render(<ErrorButton />);

    const throwErrorButton = screen.getByRole("button", { name: /error/i });
    expect(throwErrorButton).toBeInTheDocument();
  });

  it("should throw error when throw error button clicked", () => {
    const mockOnClick = vi.fn((): void => {
      throw new Error("Oops");
    });

    render(
      <ErrorBoundary fallback={<p>Oops</p>}>
        <ErrorButton onClick={mockOnClick} />
      </ErrorBoundary>
    );

    expect(mockOnClick).toThrow(/oops/i);
  });
});
