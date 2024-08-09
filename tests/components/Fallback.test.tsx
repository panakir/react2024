import React from "react";
import { render, screen } from "@testing-library/react";
import { Fallback } from "../../src/components/layouts/errorBoundary/Fallback";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("testing Fallback component", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
  });

  it("should be rendered with reload button", () => {
    render(<Fallback />);
    expect(screen.getByRole("button", { name: /reload/i })).toBeInTheDocument();
  });
});
