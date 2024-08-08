import React from "react";
import { Pagination } from "@/components/pagination/Pagination";
import { useThemeContext } from "@/hooks/useThemeContext";
import { render, screen } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { Mock } from "vitest";
import userEvent from "@testing-library/user-event";
import { updatePage } from "@/store/slices/searchSlice";

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
}));

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("Pagination Component", () => {
  const mockDispatch = vi.fn();
  const mockThemeContext = { theme: "light" };

  beforeEach(() => {
    vi.clearAllMocks();
    (useDispatch as unknown as Mock).mockReturnValue(mockDispatch);
    (useThemeContext as unknown as Mock).mockReturnValue(mockThemeContext);
  });

  it("renders the correct number of pagination buttons", () => {
    const qtyCharacters = 45;
    const currentPage = 1;

    render(
      <Pagination
        qtyCharacters={qtyCharacters}
        currentPage={currentPage}
      />
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(7);
  });

  it('disables the "Previous" button on the first page', () => {
    render(
      <Pagination
        qtyCharacters={30}
        currentPage={1}
      />
    );

    const prevButton = screen.getByText("<");
    expect(prevButton).toBeDisabled();
  });

  it('disables the "Next" button on the last page', () => {
    render(
      <Pagination
        qtyCharacters={30}
        currentPage={3}
      />
    );

    const nextButton = screen.getByText(">");
    expect(nextButton).toBeDisabled();
  });

  it('enables the "Next" button on any page except the last', () => {
    render(
      <Pagination
        qtyCharacters={30}
        currentPage={2}
      />
    );

    const nextButton = screen.getByText(">");
    expect(nextButton).not.toBeDisabled();
  });

  it("calls dispatch with the correct page number when a page button is clicked", async () => {
    render(
      <Pagination
        qtyCharacters={50}
        currentPage={2}
      />
    );

    const pageButton = screen.getByText("3");
    await userEvent.setup().click(pageButton);

    expect(mockDispatch).toHaveBeenCalledWith(updatePage("3"));
  });

  it('calls dispatch with the correct page number when "Previous" is clicked', async () => {
    render(
      <Pagination
        qtyCharacters={50}
        currentPage={2}
      />
    );

    const prevButton = screen.getByText("<");
    await userEvent.setup().click(prevButton);

    expect(mockDispatch).toHaveBeenCalledWith(updatePage("1"));
  });

  it('calls dispatch with the correct page number when "Next" is clicked', async () => {
    render(
      <Pagination
        qtyCharacters={50}
        currentPage={2}
      />
    );

    const nextButton = screen.getByText(">");
    await userEvent.setup().click(nextButton);

    expect(mockDispatch).toHaveBeenCalledWith(updatePage("3"));
  });

  it("applies the correct theme class to the pagination container", () => {
    render(
      <Pagination
        qtyCharacters={30}
        currentPage={1}
      />
    );

    const paginationContainer = screen.getByTestId("pagination");
    expect(paginationContainer).toHaveClass("light");
  });
});
