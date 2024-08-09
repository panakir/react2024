import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from "../../src/components/search/Search";
import { useThemeContext } from "@/hooks/useThemeContext";

import { Mock } from "vitest";
import StoreProvider from "@/app/StoreProvider";

const user = userEvent.setup();

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

const mockedDispatch = vi.fn();
vi.mock("react-redux", async () => {
  const actual =
    await vi.importActual<typeof import("react-redux")>("react-redux");
  return {
    ...actual,
    useDispatch: (): Mock => mockedDispatch,
  };
});

describe("testing Search component", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
  });

  it("should save the entered value to the local storage when search button clicked", async () => {
    render(
      <StoreProvider>
        <Search />
      </StoreProvider>
    );
    const button = screen.getByText(/search/i);
    await user.click(button);

    expect(mockedDispatch).toHaveBeenCalled();
  });

  it("should rendered with search button", () => {
    render(
      <StoreProvider>
        <Search />
      </StoreProvider>
    );

    const searchButton = screen.getByRole("button", { name: /search/i });

    expect(searchButton).toBeInTheDocument();
  });

  it("should rendered with Throw Error button", () => {
    render(
      <StoreProvider>
        <Search />
      </StoreProvider>
    );

    const throwErrorButton = screen.getByRole("button", { name: /throw/i });

    expect(throwErrorButton).toBeInTheDocument();
  });

  it("should rendered with search input area with default value", () => {
    render(
      <StoreProvider>
        <Search />
      </StoreProvider>
    );

    const searchInput = screen.getByDisplayValue(
      localStorage.getItem("searchTerm") ?? ""
    );

    expect(searchInput).toBeInTheDocument();
  });
});
