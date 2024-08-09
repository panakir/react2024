import React from "react";
import { render, screen } from "@testing-library/react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";
import { Results } from "@/components/results/Results";
import StoreProvider from "@/app/StoreProvider";
import { mockResultsList } from "../mocks/ResultsMocks";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useParams: vi.fn(),
  useRouter: vi.fn(),
}));

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
      <StoreProvider>
        <Results
          result={[]}
          detailsData={null}
        />
      </StoreProvider>
    );
    const message = screen.getByText(/no result/i);
    expect(message).toBeInTheDocument();
  });

  it("should renders the specified number of cards", () => {
    const { container } = render(
      <StoreProvider>
        <Results
          result={mockResultsList}
          detailsData={null}
        />
      </StoreProvider>
    );
    const links = container.querySelectorAll("a");

    expect(links.length).toBe(NUMBER_OF_CARDS);
  });
});
