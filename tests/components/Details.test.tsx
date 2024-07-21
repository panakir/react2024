import { Details } from "@/components/details/Details";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { useLoaderData } from "react-router-dom";
import { Mock } from "vitest";
import { mockResultsList } from "../mocks/ResultsMocks";

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
  it("should rendered with correct data", () => {
    (useLoaderData as Mock).mockReturnValue(mockResultsList[0]);

    const { getByText } = render(<Details />);

    expect(getByText(/height/i)).toBeInTheDocument();
    expect(getByText(/mass/i)).toBeInTheDocument();
    expect(getByText(/gender/i)).toBeInTheDocument();
    expect(getByText(/birth/i)).toBeInTheDocument();
    expect(getByText(/luke/i)).toBeInTheDocument();
  });

  it("should be closed when close button clicked", async () => {
    const { getByTestId } = render(<Details />);
    const closeBtn = getByTestId("details-close-btn");

    await userEvent.setup().click(closeBtn);

    expect(mockedNavigate).toHaveBeenCalled();
  });
});
