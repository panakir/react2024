import { initialFetch, detailsFetch } from "@/api/api";
import { GetServerSidePropsContext } from "next";
import { Mock } from "vitest";

global.fetch = vi.fn();

const createMockContext = (query: Record<string, string>): GetServerSidePropsContext => ({
  query,
} as GetServerSidePropsContext);

describe("initialFetch", () => {
  it("should fetch data based on search term and page", async () => {

    const mockResponse = { data: "some data" };
    (global.fetch as Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    });

    const mockContext = createMockContext({ search: "test", page: "1" });
    const result = await initialFetch(mockContext);

    expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_BASE_URL}?search=test&page=1`);

    expect(result).toEqual(mockResponse);
  });

  it("should handle fetch failure", async () => {
    (global.fetch as Mock).mockRejectedValueOnce(new Error("Network error"));

    const mockContext = createMockContext({ search: "test", page: "1" });

    await expect(initialFetch(mockContext)).rejects.toThrow("Fetch is failed because Network error");
  });
});

describe("detailsFetch", () => {
  it("should fetch details based on ID", async () => {
    const mockResponse = { data: "detail data" };
    (global.fetch as Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    });

    const mockContext = createMockContext({ id: "123" });
    const result = await detailsFetch(mockContext);

    expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_BASE_URL}/123`);

    expect(result).toEqual(mockResponse);
  });


});
