// ThemeProvider.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";
import userEvent from "@testing-library/user-event";

// Mock child component to consume the context
const MockChildComponent = (): React.ReactElement | null => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    return null;
  }

  return (
    <div>
      <span data-testid="theme">{context.theme}</span>
      <button
        data-testid="toggle-button"
        onClick={context.toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

describe("ThemeProvider", () => {
  test("provides the default theme", () => {
    render(
      <ThemeProvider>
        <MockChildComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme")).toHaveTextContent("light");
  });

  test("toggles the theme when the button is clicked", async () => {
    render(
      <ThemeProvider>
        <MockChildComponent />
      </ThemeProvider>
    );

    const button = screen.getByTestId("toggle-button");
    await userEvent.setup().click(button);

    expect(screen.getByTestId("theme")).toHaveTextContent("dark");

    await userEvent.setup().click(button);

    expect(screen.getByTestId("theme")).toHaveTextContent("light");
  });
});
