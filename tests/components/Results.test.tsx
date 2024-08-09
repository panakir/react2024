import React from "react";
import { render, screen } from "@testing-library/react";
import { mockResultsList } from "../mocks/ResultsMocks";
import userEvent from "@testing-library/user-event";
import { mockResponse } from "../mocks/ResponseApiMock";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { Results } from "@/components/results/Results";
import { useRouter } from "next/router";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

vi.mock("next/router", async (importOriginal: () => object) => {
  const modules = await importOriginal();
  return {
    ...modules,
    useRouter: vi.fn(),
  };
});
vi.mock("next/navigation", async (importOriginal: () => object) => {
  const modules = await importOriginal();
  return {
    ...modules,
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
  const NUMBER_OF_CARDS = 10;

  it("should display message if not result", () => {
    render(
      <Provider store={store}>
        <Results result={[]} />
      </Provider>
    );
    const message = screen.getByText(/no result/i);
    expect(message).toBeInTheDocument();
  });

  it("should renders the specified number of cards", () => {
    const { container } = render(
      <Provider store={store}>
        <Results result={mockResultsList} />
      </Provider>
    );
    const links = container.querySelectorAll("a");

    expect(links.length).toBe(NUMBER_OF_CARDS);
  });
});
