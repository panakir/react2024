import { Details } from "@/components/details/Details";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { Mock } from "vitest";
import { store } from "@/store/store";
import { useParams } from "react-router-dom";
import { Provider } from "react-redux";

const mockedNavigate = vi.fn();
const mockedHook = vi.fn();

vi.mock("react-router-dom", (importOriginal: () => object) => {
  const modules = importOriginal();
  return {
    ...modules,
    useParams: vi.fn(),
    useNavigate: (): Mock => mockedNavigate,
  };
});

vi.mock("react-redux", async (importOriginal: () => object) => {
  const modules = await importOriginal();
  return {
    ...modules,
    useGetCharacterByIdQuery: (): Mock => mockedHook,
  };
});

describe("testing Details panel", () => {
  it("should rendered with correct data", async () => {
    (useParams as Mock).mockReturnValue("1");

    render(
      <Provider store={store}>
        <Details />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/height/i)).toBeInTheDocument();
      expect(screen.getByText(/mass/i)).toBeInTheDocument();
      expect(screen.getByText(/gender/i)).toBeInTheDocument();
      expect(screen.getByText(/birth/i)).toBeInTheDocument();
    });
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
