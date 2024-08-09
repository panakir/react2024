import React from "react";
import { Main } from "@/components/layouts/main/Main";
import { useThemeContext } from "@/hooks/useThemeContext";
import { render, screen, waitFor } from "@testing-library/react";
import { Mock } from "vitest";
import { useRouter } from "next/navigation";
import { mockResponse } from "../mocks/ResponseApiMock";
import StoreProvider from "@/app/StoreProvider";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  useParams: vi.fn(),
}));

describe("testing Main component", () => {
  beforeEach(() => {
    const mockContext = {
      theme: "dark",
      setTheme: vi.fn(),
    };
    (useThemeContext as Mock).mockReturnValue(mockContext);
    (useRouter as Mock).mockReturnValue({ replace: vi.fn(), push: vi.fn() });
  });

  it("should rendered with search component", () => {
    render(
      <StoreProvider>
        <Main data={mockResponse} />
      </StoreProvider>
    );
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with Results after loader", () => {
    render(
      <StoreProvider>
        <Main data={mockResponse} />
      </StoreProvider>
    );

    waitFor(async () => {
      const result = await screen.findByTestId("results");
      expect(result).toBeInTheDocument();
    });
  });

  it("should rendered with Pagination components", async () => {
    render(
      <StoreProvider>
        <Main data={mockResponse} />
      </StoreProvider>
    );
    const pagination = await screen.findByTestId("pagination");

    expect(pagination).toBeInTheDocument();
  });
});
