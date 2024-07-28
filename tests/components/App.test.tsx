import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { App } from "../../src/components/app/App";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("testing App component", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
  });

  it("should rendered with header component", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const header = container.querySelector("header");

    expect(header).toBeInTheDocument();
  });

  it("should rendered with footer component", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const footer = container.querySelector("footer");

    expect(footer).toBeInTheDocument();
  });
});
