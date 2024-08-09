import React from "react";
import { render, screen } from "@testing-library/react";
import NotFoundPage from "@/pages/404";

describe("Not Found Page test", async () => {
  it("should render with message", async () => {
    render(<NotFoundPage />);
    const message = await screen.findByText(/404/i);
    expect(message).toBeInTheDocument();
  });
});
