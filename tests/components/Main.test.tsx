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

  it("should rendered with Result components", async () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    const results = await screen.findByRole("results");

    expect(results).toBeInTheDocument();
  });

  it("should rendered with Pagination components", async () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const pagination = await screen.findByRole("pagination");

    expect(pagination).toBeInTheDocument();
  });
});
