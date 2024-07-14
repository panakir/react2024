import { render, screen } from "@testing-library/react";
import { Loader } from "../../src/assets/components/loader/Loader";

describe("testing Loader component", () => {
  render(<Loader />);
  it("should relevant render ", () => {
    expect(screen.getByText(/loading.../)).toBeInTheDocument();
  });

  it("should render image", () => {
    const { getByAltText } = render(<Loader />);

    const image = getByAltText("Loader image");

    expect(image).toBeInTheDocument();
  });
});
