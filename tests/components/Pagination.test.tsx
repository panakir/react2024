import { Pagination } from "@/components/pagination/Pagination";
import { useThemeContext } from "@/hooks/useThemeContext";
import { render } from "@testing-library/react";
import { Mock } from "vitest";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("testing Pagination component", () => {
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
        handlePreviousPage={vi.fn()}
        handleSelectedPage={vi.fn()}
        handleNextPage={vi.fn()}
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
        handlePreviousPage={vi.fn()}
        handleSelectedPage={vi.fn()}
        handleNextPage={vi.fn()}
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
        handlePreviousPage={vi.fn()}
        handleSelectedPage={vi.fn()}
        handleNextPage={vi.fn()}
      />
    );
    const button = getByRole("button", { name: ">" });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with correct page buttons", () => {
    const { getAllByRole } = render(
      <Pagination
        qtyCharacters={45}
        currentPage={1}
        handlePreviousPage={vi.fn()}
        handleSelectedPage={vi.fn()}
        handleNextPage={vi.fn()}
      />
    );
    const buttons = getAllByRole("button");
    expect(buttons.length).toEqual(7);
  });
});
