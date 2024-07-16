import { render, screen } from "@testing-library/react";
import { Results } from "../../src/assets/components/results/Results";
import { mockResultsList } from "../mocks/ResultsMocks";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { mockResponse } from "../mocks/ResponseApiMock";

const user = userEvent.setup();

describe("testing Results component", () => {
  const NUMBER_OF_CARDS = 10;

  it("should display message if not result", () => {
    render(
      <Results
        result={[]}
        closeOutlet={vi.fn()}
      />
    );
    const message = screen.getByText(/no result/i);
    expect(message).toBeInTheDocument();
  });

  it("should renders the specified number of cards", () => {
    const props = {
      result: mockResultsList,
      closeOutlet: vi.fn(),
    };
    const { container } = render(
      <BrowserRouter>
        <Results {...props} />
      </BrowserRouter>
    );
    const links = container.querySelectorAll("a");

    expect(links.length).toBe(NUMBER_OF_CARDS);
  });

  it("should", async () => {
    const mockedOnClick = vi.fn();
    render(
      <BrowserRouter>
        <Results
          result={mockResponse.results}
          closeOutlet={mockedOnClick}
        />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    await user.click(link);

    expect(mockedOnClick).toHaveBeenCalledOnce();
  });
});
