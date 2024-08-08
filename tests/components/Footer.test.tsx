import { Footer } from "@/components/layouts/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Footer testing", () => {
  it("should render with logo and github link", () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );

    const links = screen.getAllByRole("link");

    expect(screen.getByText(/panakir/i)).toBeInTheDocument();
    expect(links[1]).toHaveAttribute("href", "https://rs.school/");
  });
});
