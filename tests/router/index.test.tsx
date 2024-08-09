import React from "react";
import { render, screen } from "@testing-library/react";
import { initialFetch } from "@/api/api";
import Page, { getServerSideProps } from "@/pages";
import { Mock } from "vitest";
import { GetServerSidePropsContext } from "next/types";

vi.mock("@/api/api", () => ({
  initialFetch: vi.fn(),
}));

vi.mock("@/components/layouts/main/Main", () => ({
  Main: ({ data }: { data: any }) => (
    <div data-testid="main-component">
      Mocked Main Component with data: {JSON.stringify(data)}
    </div>
  ),
}));

describe("Page Component", () => {
  it("should render with fetched data", async () => {
    const mockData = { data: "fetched data" };

    (initialFetch as Mock).mockResolvedValueOnce(mockData);

    const mockContext = {
      query: { search: "test", page: "1" },
    } as unknown as GetServerSidePropsContext;

    const { props } = await getServerSideProps(mockContext);

    render(<Page {...props} />);

    expect(screen.getByTestId("main-component")).toHaveTextContent(
      'Mocked Main Component with data: {"data":"fetched data"}'
    );
  });
});
