import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Search } from "../../src/assets/components/search/Search";
import userEvent from "@testing-library/user-event";

describe("testing Search component", () => {
  afterEach(() => localStorage.removeItem("searchTerm"));
  const user = userEvent;
  const value = "luke";
  const setLocalStorage = vi.fn(() =>
    localStorage.setItem("searchTerm", value)
  );
  const getLocalStorage = vi.fn(() => localStorage.getItem("searchTerm") ?? "");

  render(<Search handleSearch={setLocalStorage} />);

  it("should save the entered value to the local storage when search button clicked", async () => {
    const button = screen.getByText(/search/i);
    await user.click(button);
    const checkLocalStorage = (): string =>
      localStorage.getItem("searchTerm") ?? "";

    expect(value).toBe(checkLocalStorage());
  });

  it("component should retrieves the value from the local storage upon mounting", () => {
    setLocalStorage();
    getLocalStorage();

    expect(getLocalStorage()).toBe(value);
  });
});
