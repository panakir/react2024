import React from "react";
import Layout from "@/pages/layout";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/context/ThemeContext";

vi.mock("@/components/layouts/header/Header", () => ({
  Header: () => <div data-testid="header">Header Component</div>,
}));

vi.mock("@/components/layouts/footer/Footer", () => ({
  Footer: () => <div data-testid="footer">Footer Component</div>,
}));

const ProblematicComponent = () => {
  throw new Error("Test Error");
};

describe("Layout Component", () => {
  it("should render the Header, Footer, and children", () => {
    render(
      <Layout>
        <div data-testid="content">Main Content</div>
      </Layout>
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();

    expect(screen.getByTestId("footer")).toBeInTheDocument();

    expect(screen.getByTestId("content")).toBeInTheDocument();
  });

  it("should render the fallback UI when an error is thrown", () => {
    render(
      <ThemeProvider>
        <Layout>
          <ProblematicComponent />
        </Layout>
      </ThemeProvider>
    );

    expect(screen.getByText(/oops/i)).toBeInTheDocument();
  });
});
