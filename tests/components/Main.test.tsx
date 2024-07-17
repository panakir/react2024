import { render, screen } from "@testing-library/react";
import { Main } from "../../src/components/layouts/main/Main";
import { BrowserRouter } from "react-router-dom";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("testing Main component", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
  });

  it("should rendered with search component", () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with Result components", async () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    const results = await screen.findByRole("results");

    expect(results).toBeInTheDocument();
  });

  it("should rendered with Pagination components", async () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const pagination = await screen.findByTestId("pagination");

    expect(pagination).toBeInTheDocument();
  });
});
