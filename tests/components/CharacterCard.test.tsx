import { render, screen } from "@testing-library/react";
import { CharacterCard } from "../../src/assets/components/characterCard/CharacterCard";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("testing Character card components", () => {
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
      <BrowserRouter>
        <CharacterCard character={mockedData} />
      </BrowserRouter>
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
      <BrowserRouter>
        <CharacterCard character={mockedData} />
      </BrowserRouter>
    );
    const card = screen.getByRole("link");
    await userEvent.setup().click(card);

    expect(window.location.href.includes("details")).toBeTruthy();
  });
});
