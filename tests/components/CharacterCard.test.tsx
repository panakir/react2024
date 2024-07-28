import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CharacterCard } from "../../src/components/characterCard/CharacterCard";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Mock } from "vitest";
import { Provider } from "react-redux";
import { store } from "@/store/store";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

describe("testing Character card components", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
  });
  const mockedData = {
    name: "Luke",
    gender: "male",
    height: "175",
    mass: "80",
    birth_year: "1988",
    url: "https://swapi.dev/api/people/1",
  };

  it("should renders the relevant card data", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CharacterCard character={mockedData} />
        </BrowserRouter>
      </Provider>
    );

    const name = screen.getByText(/luke/i);
    const gender = screen.getByText(/male/i);
    const birth_year = screen.getByText(/1988/i);

    expect(name).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(birth_year).toBeInTheDocument();
  });

  it("should be redirect to Details", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CharacterCard character={mockedData} />
        </BrowserRouter>
      </Provider>
    );
    const card = screen.getByRole("link");
    await userEvent.setup().click(card);

    expect(window.location.href.includes("details")).toBeTruthy();
  });
});
