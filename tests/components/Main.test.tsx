import { Main } from "@/components/layouts/main/Main";
import { useThemeContext } from "@/hooks/useThemeContext";
import { store } from "@/store/store";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Mock } from "vitest";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("testing Main component", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
  });

  it("should rendered with search component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with loader before Results rendered", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );

    const loader = screen.getByText(/loading/i);

    expect(loader).toBeInTheDocument();
  });

  it("should rendered with Results after loader", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );

    const loader = screen.getByText(/loading/i);
    expect(loader).toBeInTheDocument();
    waitFor(async () => {
      const result = await screen.findByTestId("results");
      expect(result).toBeInTheDocument();
    });
  });

  it("should rendered with Pagination components", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
    const pagination = await screen.findByTestId("pagination");

    expect(pagination).toBeInTheDocument();
  });
});
