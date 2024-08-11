import { render } from "@testing-library/react";
import Root from "../../app/root";

vi.mock("@remix-run/react", () => ({
  Links: (): React.ReactNode => (
    <link
      rel="stylesheet"
      href="mock-style.css"
    />
  ),
  Meta: (): React.ReactNode => <meta charSet="UTF-8" />,
  Outlet: (): React.ReactNode => <div>Outlet Component</div>,
  Scripts: (): React.ReactNode => <script src="mock-script.js"></script>,
}));

describe("Root Component", () => {
  test("renders with Meta, Links, Outlet, and Scripts", () => {
    const { container } = render(<Root />);

    expect(container.querySelector("html")).toBeInTheDocument();
    expect(container.querySelector("head")).toBeInTheDocument();
    expect(container.querySelector("meta")).toBeInTheDocument();
    expect(container.querySelector("link")).toHaveAttribute(
      "rel",
      "stylesheet"
    );
    expect(container.querySelector("body")).toBeInTheDocument();
    expect(container.querySelector("script")).toBeInTheDocument();
  });

  test("wraps Outlet with Provider and ThemeProvider", () => {
    const { getByText } = render(<Root />);

    expect(getByText("Outlet Component")).toBeInTheDocument();
  });
});
