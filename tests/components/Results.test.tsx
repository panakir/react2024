import { render, screen } from "@testing-library/react";
import { Results } from "../../src/assets/components/results/Results";
import { mockResultsList } from "../mocks/ResultsMocks";
import { BrowserRouter } from "react-router-dom";

describe("testing Results component", () => {
  const NUMBER_OF_CARDS = 10;

  const close = vi.fn();

  it("should display message if not result", () => {
    render(
      <Results
        result={[]}
        closeOutlet={close}
      />
    );
    const message = screen.getByText(/no result/i);
    expect(message).toBeInTheDocument();
  });

  it("should renders the specified number of cards", () => {
    const props = {
      result: mockResultsList,
      closeOutlet: close,
    };
    const { container } = render(
      <BrowserRouter>
        <Results {...props} />
      </BrowserRouter>
    );
    const links = container.querySelectorAll("a");

    expect(links.length).toBe(NUMBER_OF_CARDS);
  });
});
