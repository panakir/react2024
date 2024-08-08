import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { CharacterCard } from "../../src/components/characterCard/CharacterCard";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";
import { addDetailsCharacter } from "@/store/slices/charactersSlice";
import { Character } from "@/shared/types";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/store/slices/selectItemsSlice";

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("CharacterCard Component", () => {
  const mockCharacter: Character = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    gender: "male",
    birth_year: "19BBY",
    url: "https://swapi.dev/api/people/1/",
  };

  const mockDispatch = vi.fn();

  beforeEach(() => {
    (useDispatch as unknown as Mock).mockReturnValue(mockDispatch);
    (useSelector as unknown as Mock).mockImplementation((selector) =>
      selector({
        selectItem: [],
        search: { page: 1, query: "" },
      })
    );
    (useThemeContext as Mock).mockReturnValue({ theme: "light" });
  });

  it("renders character details correctly", () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("gender: male")).toBeInTheDocument();
    expect(screen.getByText("birth year: 19BBY")).toBeInTheDocument();
  });

  it("handles checkbox selection ", async () => {
    render(<CharacterCard character={mockCharacter} />);

    const checkbox = screen.getByLabelText("select card");
    expect(checkbox).not.toBeChecked();

    await userEvent.setup().click(checkbox);
    expect(mockDispatch).toHaveBeenCalledWith(addItem(mockCharacter));
  });

  it("applies the correct theme class based on the current theme", () => {
    (useThemeContext as Mock).mockReturnValue({ theme: "dark" });

    render(<CharacterCard character={mockCharacter} />);

    const link = screen.getByTestId("link");
    expect(link).toHaveClass(/dark/i);
  });

  it("renders the correct link and handles click event", async () => {
    render(<CharacterCard character={mockCharacter} />);

    const link = screen.getByTestId("link");
    expect(link).toHaveAttribute("href", "details/1?page=1");

    await userEvent.setup().click(link);
    expect(mockDispatch).toHaveBeenCalledWith(
      addDetailsCharacter(mockCharacter)
    );
  });

  it("renders the correct link with search query when present", () => {
    (useSelector as unknown as Mock).mockImplementation((selector) =>
      selector({
        selectItem: [],
        search: { page: 2, query: "Skywalker" },
      })
    );

    render(<CharacterCard character={mockCharacter} />);

    const link = screen.getByTestId("link");
    expect(link).toHaveAttribute("href", "details/1?page=2&search=Skywalker");
  });
});
