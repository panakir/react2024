import { Main } from "@/components/layouts/main/Main";
import { useThemeContext } from "@/hooks/useThemeContext";
import { store } from "@/store/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Mock } from "vitest";
import { mockResponse } from "../mocks/ResponseApiMock";
import { MemoryRouter } from "react-router-dom";

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
        <MemoryRouter>
          <Main data={mockResponse} />
        </MemoryRouter>
      </Provider>
    );
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with Results ", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Main data={mockResponse} />
        </MemoryRouter>
      </Provider>
    );

    const result = screen.getByTestId("results");
    expect(result).toBeInTheDocument();
  });

  it("should rendered with Pagination components", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Main data={mockResponse} />
        </MemoryRouter>
      </Provider>
    );
    const pagination = await screen.findByTestId("pagination");

    expect(pagination).toBeInTheDocument();
  });
});
