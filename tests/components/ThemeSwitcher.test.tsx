import React from "react";
import { render, screen } from "@testing-library/react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";
import { ThemeSwitcher } from "@/components/elements/themeSwitcher/ThemeSwitcher";
import userEvent from "@testing-library/user-event";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("ThemeSwitcher Component", () => {
  const mockToggleTheme = vi.fn();

  beforeEach(() => {
    (useThemeContext as Mock).mockReturnValue({
      toggleTheme: mockToggleTheme,
    });
  });

  it("renders the switcher component correctly", () => {
    render(<ThemeSwitcher />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("calls toggleTheme when the switcher is clicked", async () => {
    render(<ThemeSwitcher />);

    const checkbox = screen.getByRole("checkbox");
    await userEvent.setup().click(checkbox);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
