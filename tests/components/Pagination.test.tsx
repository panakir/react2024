import { Pagination } from "@/components/pagination/Pagination";
import { useThemeContext } from "@/hooks/useThemeContext";
import { store } from "@/store/store";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Mock } from "vitest";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

const mockedNavigate = vi.fn();

vi.mock("react-router-dom", async (importOriginal: () => object) => {
  const modules = await importOriginal();
  return {
    ...modules,
    useNavigate: (): Mock => mockedNavigate,
  };
});

describe("testing Pagination component", () => {
  const mockContextResult = {
    theme: "light",
    toggleTheme: vi.fn(),
  };
  (useThemeContext as Mock).mockReturnValue(mockContextResult);

  it("should rendered with buttons", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination
            qtyCharacters={1}
            currentPage={1}
          />
        </BrowserRouter>
      </Provider>
    );
    const button = getByRole("button", { name: "1" });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with previous page button", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination
            qtyCharacters={1}
            currentPage={1}
          />
        </BrowserRouter>
      </Provider>
    );
    const button = getByRole("button", { name: "<" });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with next page button", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination
            qtyCharacters={1}
            currentPage={1}
          />
        </BrowserRouter>
      </Provider>
    );
    const button = getByRole("button", { name: ">" });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with correct page buttons", () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination
            qtyCharacters={1}
            currentPage={1}
          />
        </BrowserRouter>
      </Provider>
    );
    const buttons = getAllByRole("button");
    expect(buttons.length).toEqual(3);
  });

  it("should navigate to previous page when previous button clicked", async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination
            qtyCharacters={1}
            currentPage={2}
          />
        </BrowserRouter>
      </Provider>
    );

    const prevBtn = getByRole("button", { name: "<" });
    await userEvent.setup().click(prevBtn);
    const page = 1;

    expect(mockedNavigate).toHaveBeenCalledWith(`../page/${page}`, {
      replace: true,
    });
  });

  it("should navigate to next page when next button clicked", async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination
            qtyCharacters={1}
            currentPage={2}
          />
        </BrowserRouter>
      </Provider>
    );

    const nextBtn = getByRole("button", { name: ">" });
    await userEvent.setup().click(nextBtn);
    const page = 3;

    expect(mockedNavigate).toHaveBeenCalledWith(`../page/${page}`, {
      replace: true,
    });
  });

  it("should navigate to selected page when selected button clicked", async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination
            qtyCharacters={100}
            currentPage={2}
          />
        </BrowserRouter>
      </Provider>
    );

    const selectedBtn = getByRole("button", { name: "3" });
    await userEvent.setup().click(selectedBtn);
    const page = 3;

    expect(mockedNavigate).toHaveBeenCalledWith(`../page/${page}`, {
      replace: true,
    });
  });
});
