import React from "react";
import { Main } from "@/components/layouts/main/Main";
import { useThemeContext } from "@/hooks/useThemeContext";
import { store } from "@/store/store";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { Mock } from "vitest";
import { useRouter } from "next/router";
import { mockResponse } from "../mocks/ResponseApiMock";

vi.mock("@/hooks/useThemeContext", () => ({
  useThemeContext: vi.fn(),
}));

vi.mock("next/router", () => ({
  useRouter: vi.fn(),
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
      <Provider store={store}>
        <Main data={mockResponse} />
      </Provider>
    );
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  it("should rendered with Results after loader", () => {
    render(
      <Provider store={store}>
        <Main data={mockResponse} />
      </Provider>
    );

    waitFor(async () => {
      const result = await screen.findByTestId("results");
      expect(result).toBeInTheDocument();
    });
  });

  it("should rendered with Pagination components", async () => {
    render(
      <Provider store={store}>
        <Main data={mockResponse} />
      </Provider>
    );
    const pagination = await screen.findByTestId("pagination");

    expect(pagination).toBeInTheDocument();
  });
});
