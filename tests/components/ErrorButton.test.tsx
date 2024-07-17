import { render, screen } from "@testing-library/react";
import { ErrorButton } from "../../src/components/layouts/errorBoundary/ErrorButton";
import userEvent from "@testing-library/user-event";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";
import { ErrorBoundary } from "@/components/layouts/errorBoundary/ErrorBoundary";
import { Fallback } from "@/components/layouts/errorBoundary/Fallback";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("testing Error button component", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
  });

  it("should render button", () => {
    render(<ErrorButton />);

    const throwErrorButton = screen.getByRole("button", { name: /error/i });
    expect(throwErrorButton).toBeInTheDocument();
  });

  it("should throw error when throw error button clicked", async () => {
    const { getByText } = render(
      <ErrorBoundary fallback={<Fallback />}>
        <ErrorButton />
      </ErrorBoundary>
    );
    const button = getByText(/error/i);
    await userEvent.setup().click(button);
    const fallback = getByText(/force/i);
    expect(fallback).toBeInTheDocument();
  });
});
