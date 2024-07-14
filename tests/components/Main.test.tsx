import { render, screen } from "@testing-library/react";
import { Main } from "../../src/assets/components/main/Main";
import { BrowserRouter } from "react-router-dom";

describe("testing Main component", () => {
  it("should rendered with search component", () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with Result components", () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  });
});
