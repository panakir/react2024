import { Details } from "@/components/details/Details";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Mock } from "vitest";
import configureStore from "redux-mock-store";
import { store } from "@/store/store";
import { Provider } from "react-redux";

const mockedNavigate = vi.fn();

vi.mock("react-router-dom", async (importOriginal: () => object) => {
  const modules = await importOriginal();
  return {
    ...modules,
    useLoaderData: vi.fn(),
    useNavigate: (): Mock => mockedNavigate,
  };
});

describe("testing Details panel", () => {
  const initialStore = {
    characters: {
      details: {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        birth_year: "19BBY",
        gender: "male",
        url: "https://swapi.dev/api/people/1/",
      },
    },
  };

  const mockStore = configureStore();
  const detailsStore = mockStore(initialStore);

  it("should rendered with correct data", () => {
    render(
      <Provider store={detailsStore}>
        <Details />
      </Provider>
    );

    expect(screen.getByText(/height/i)).toBeInTheDocument();
    expect(screen.getByText(/mass/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/birth/i)).toBeInTheDocument();
    expect(screen.getByText(/luke/i)).toBeInTheDocument();
  });

  it("should be closed when close button clicked", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Details />
      </Provider>
    );
    const closeBtn = getByTestId("details-close-btn");

    await userEvent.setup().click(closeBtn);

    expect(mockedNavigate).toHaveBeenCalled();
  });
});
