import { render, screen } from "@testing-library/react";
import { mockResultsList } from "../mocks/ResultsMocks";
import { Results } from "../../src/components/results/Results";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

const NUMBER_OF_CARDS = 10;

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

vi.mock("@remix-run/react", async (importOriginal: () => object) => {
  const modules = await importOriginal();
  return {
    ...modules,
    useNavigate: vi.fn(),
    useParams: vi.fn(),
  };
});

describe("testing Results component", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
  });

  it("should display message if not result", () => {
    render(
      <Provider store={store}>
        <Results
          result={[]}
          details={null}
        />
      </Provider>
    );
    const message = screen.getByText(/no result/i);
    expect(message).toBeInTheDocument();
  });

  it("should renders the specified number of cards", () => {
    const props = {
      result: mockResultsList,
      details: null,
    };
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Results {...props} />
        </MemoryRouter>
      </Provider>
    );
    const links = container.querySelectorAll("a");

    expect(links.length).toBe(NUMBER_OF_CARDS);
  });
});
