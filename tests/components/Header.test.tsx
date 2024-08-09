import React from "react";
import { Header } from "@/components/layouts/header/Header";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/context/ThemeContext";

describe("Header testing", () => {
  it("should render with heading and checkbox", () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
