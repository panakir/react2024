import { render, screen } from "@testing-library/react";
import { mockResultsList } from "../mocks/ResultsMocks";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { mockResponse } from "../mocks/ResponseApiMock";
import { Results } from "../../src/components/results/Results";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";
import { store } from "@/store/store";
import { Provider } from "react-redux";

const user = userEvent.setup();

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("testing Results component", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
  });
  const NUMBER_OF_CARDS = 10;

  it("should display message if not result", () => {
    render(
      <Provider store={store}>
        <Results
          result={[]}
          closeOutlet={vi.fn()}
        />
      </Provider>
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
      <Provider store={store}>
        <BrowserRouter>
          <Results {...props} />
        </BrowserRouter>
      </Provider>
    );
    const links = container.querySelectorAll("a");

    expect(links.length).toBe(NUMBER_OF_CARDS);
  });

  it("should", async () => {
    const mockedOnClick = vi.fn();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Results
            result={mockResponse.results}
            closeOutlet={mockedOnClick}
          />
        </BrowserRouter>
      </Provider>
    );

    const link = screen.getByRole("link");

    await user.click(link);

    expect(mockedOnClick).toHaveBeenCalledOnce();
  });
});
