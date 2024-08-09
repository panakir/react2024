import React from "react";
import MyApp from "@/pages/_app";
import { AppProps } from "next/app";
import { render, screen } from "@testing-library/react";

vi.mock("@/context/ThemeContext", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}));

vi.mock("@/store/store", () => ({
  store: {
    getState: () => ({}),
    subscribe: vi.fn(),
    dispatch: vi.fn(),
  },
}));

vi.mock("react-redux", () => ({
  Provider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="redux-provider">{children}</div>
  ),
}));

vi.mock("@/pages/layout", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="layout">{children}</div>
  ),
}));

describe("MyApp Component", () => {
  it("should render with ThemeProvider, Layout, and Redux Provider", () => {
    const MockComponent = () => (
      <div data-testid="mock-component">Mock Component</div>
    );

    const mockPageProps = {};

    const mockAppProps = {
      Component: MockComponent,
      pageProps: mockPageProps,
    } as unknown as AppProps;

    render(<MyApp {...mockAppProps} />);

    expect(screen.getByTestId("theme-provider")).toBeInTheDocument();

    expect(screen.getByTestId("layout")).toBeInTheDocument();

    expect(screen.getByTestId("redux-provider")).toBeInTheDocument();

    expect(screen.getByTestId("mock-component")).toBeInTheDocument();
  });
});
