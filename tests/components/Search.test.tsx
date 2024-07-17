import { afterEach, describe, expect, it, Mock, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from "../../src/components/search/Search";
import { useThemeContext } from "@/hooks/useThemeContext";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("testing Search component", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
  });

  afterEach(() => localStorage.removeItem("searchTerm"));

  const user = userEvent;
  const value = "luke";
  const setLocalStorage = vi.fn(() =>
    localStorage.setItem("searchTerm", value)
  );
  const getLocalStorage = vi.fn(() => localStorage.getItem("searchTerm") ?? "");

  it("should save the entered value to the local storage when search button clicked", async () => {
    render(<Search handleSearch={setLocalStorage} />);
    const button = screen.getByText(/search/i);
    await user.click(button);
    const checkLocalStorage = (): string =>
      localStorage.getItem("searchTerm") ?? "";

    expect(value).toBe(checkLocalStorage());
  });

  it("component should retrieves the value from the local storage upon mounting", () => {
    setLocalStorage();
    getLocalStorage();

    expect(getLocalStorage()).toBe(value);
  });

  it("should rendered with search button", () => {
    render(<Search handleSearch={setLocalStorage} />);

    const searchButton = screen.getByRole("button", { name: /search/i });

    expect(searchButton).toBeInTheDocument();
  });

  it("should rendered with Throw Error button", () => {
    render(<Search handleSearch={setLocalStorage} />);

    const throwErrorButton = screen.getByRole("button", { name: /throw/i });

    expect(throwErrorButton).toBeInTheDocument();
  });

  it("should rendered with search input area with default value", () => {
    render(<Search handleSearch={setLocalStorage} />);

    const searchInput = screen.getByDisplayValue(
      localStorage.getItem("searchTerm") ?? ""
    );

    expect(searchInput).toBeInTheDocument();
  });
});
