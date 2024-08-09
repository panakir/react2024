import { Details } from "@/components/details/Details";
import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { Mock } from "vitest";
import { useParams, useRouter } from "next/navigation";
import StoreProvider from "@/app/StoreProvider";
import { Provider } from "react-redux";

const mockedHook = vi.fn();

vi.mock("react-redux", async (importOriginal: () => object) => {
  const modules = await importOriginal();
  return {
    ...modules,
    useGetCharacterByIdQuery: (): Mock => mockedHook,
  };
});

vi.mock("next/navigation", () => ({
  useRouter: vi.fn().mockReturnValue({
    query: { id: "1" },
  }),
  useParams: vi.fn(),
}));

describe("testing Details panel", () => {
  beforeEach(() => {
    (useRouter as Mock).mockReturnValue({
      query: { id: "1" },
      back: vi.fn(),
    });
  });
  it("should rendered with correct data", async () => {
    (useRouter as Mock).mockReturnValue({
      query: { id: "1" },
    });

    render(
      <StoreProvider>
        <Details />
      </StoreProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/height/i)).toBeInTheDocument();
      expect(screen.getByText(/mass/i)).toBeInTheDocument();
      expect(screen.getByText(/gender/i)).toBeInTheDocument();
      expect(screen.getByText(/birth/i)).toBeInTheDocument();
    });
  });

  it("should be closed when close button clicked", async () => {
    const mockBack = (useRouter as Mock).mockReturnValue({
      query: { id: "1" },
      back: vi.fn(),
    });

    const { findByTestId } = render(
      <StoreProvider>
        <Details />
      </StoreProvider>
    );

    const closeBtn = await findByTestId("details-close-btn");

    await userEvent.setup().click(closeBtn);

    expect(mockBack).toHaveBeenCalled();
  });
});
