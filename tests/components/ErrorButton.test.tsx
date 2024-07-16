import { render, screen } from "@testing-library/react";
import { ErrorButton } from "../../src/assets/components/errorBoundary/ErrorButton";
import userEvent from "@testing-library/user-event";

describe("testing Error button component", () => {
  it("should render button", () => {
    render(<ErrorButton />);

    const throwErrorButton = screen.getByRole("button", { name: /error/i });
    expect(throwErrorButton).toBeInTheDocument();
  });

  it.skip("should throw error when throw error button clicked", async () => {
    vi.spyOn(ErrorButton.prototype, "handlerErrorButton");

    const errorButton = screen.getByRole("button");
    await userEvent.setup().click(errorButton);

    expect(
      vi.spyOn(ErrorButton.prototype, "handlerErrorButton")
    ).toHaveBeenCalledOnce();
  });
});
