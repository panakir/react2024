import { Pagination } from "@/components/pagination/Pagination";
import { useThemeContext } from "@/hooks/useThemeContext";
import { updatePage } from "@/store/slices/searchSlice";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDispatch } from "react-redux";
import { Mock } from "vitest";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
}));

describe("testing Pagination component", () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useDispatch as unknown as Mock).mockReturnValue(mockDispatch);
  });

  const mockContextResult = {
    theme: "light",
    toggleTheme: vi.fn(),
  };
  (useThemeContext as Mock).mockReturnValue(mockContextResult);

  it("should rendered with buttons", () => {
    const { getByRole } = render(
      <Pagination
        qtyCharacters={1}
        currentPage={1}
      />
    );
    const button = getByRole("button", { name: "1" });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with previous page button", () => {
    const { getByRole } = render(
      <Pagination
        qtyCharacters={1}
        currentPage={1}
      />
    );
    const button = getByRole("button", { name: "<" });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with next page button", () => {
    const { getByRole } = render(
      <Pagination
        qtyCharacters={1}
        currentPage={1}
      />
    );
    const button = getByRole("button", { name: ">" });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with correct page buttons", () => {
    const { getAllByRole } = render(
      <Pagination
        qtyCharacters={1}
        currentPage={1}
      />
    );
    const buttons = getAllByRole("button");
    expect(buttons.length).toEqual(3);
  });

  it("should navigate to previous page when previous button clicked", async () => {
    const { getByRole } = render(
      <Pagination
        qtyCharacters={1}
        currentPage={2}
      />
    );

    const prevBtn = getByRole("button", { name: "<" });
    await userEvent.setup().click(prevBtn);

    expect(mockDispatch).toHaveBeenCalledWith(updatePage("1"));
  });

  it("should navigate to next page when next button clicked", async () => {
    const { getByRole } = render(
      <Pagination
        qtyCharacters={1}
        currentPage={2}
      />
    );

    const nextBtn = getByRole("button", { name: ">" });
    await userEvent.setup().click(nextBtn);

    expect(mockDispatch).toHaveBeenCalledWith(updatePage("3"));
  });

  it("should navigate to selected page when selected button clicked", async () => {
    const { getByRole } = render(
      <Pagination
        qtyCharacters={100}
        currentPage={2}
      />
    );

    const selectedBtn = getByRole("button", { name: "5" });
    await userEvent.setup().click(selectedBtn);

    expect(mockDispatch).toHaveBeenCalledWith(updatePage("5"));
  });
});
