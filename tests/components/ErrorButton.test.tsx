import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { ErrorButton } from "@/components/layouts/errorBoundary/ErrorButton";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/context/ThemeContext";

describe("ErrorButton Component", () => {
  it("renders the button correctly", () => {
    render(
      <ThemeProvider>
        <ErrorButton />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: /throw error/i });
    expect(button).toBeInTheDocument();
  });

  it("throws an error when the button is clicked", () => {
    const originalError = console.error;
    console.error = vi.fn();
    render(
      <ThemeProvider>
        <ErrorButton />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: /throw error/i });

    expect(() => {
      fireEvent.click(button);
    }).toThrow("Oops!");

    console.error = originalError;
  });
});
