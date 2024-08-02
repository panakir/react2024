import { render, RenderResult, screen, waitFor } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { router } from "@/router/router";
import { ThemeProvider } from "@/context/ThemeContext";

const renderWithRouter = (route: string): RenderResult | null => {
  if (route) {
    return render(
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    );
  }
  return null;
};

describe("Router", () => {
  it("should render the App component on the root path", () => {
    renderWithRouter("/");
    expect(
      screen.getByText("React Course by Rolling Scopes School")
    ).toBeInTheDocument();
  });

  it("should render the Details component on the /page/:pageId/details/:id path", () => {
    renderWithRouter("/page/1/details/1");
    waitFor(async () => {
      const details = await screen.findByText(/luke/i);
      expect(details).toBeInTheDocument();
    });
  });

  it("should render the Fallback component on an error", () => {
    renderWithRouter("/error");
    waitFor(async () => {
      const fallback = await screen.findByText(/oops/i);
      expect(fallback).toBeInTheDocument();
    });
  });

  it("should render the NotFound component on an unknown path", () => {
    renderWithRouter("/unknown-path");

    waitFor(async () => {
      const notFound = await screen.findByText(/404/i);
      expect(notFound).toBeInTheDocument();
    });
  });
});
