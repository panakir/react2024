import { Mock } from "vitest";
import { getCharacterById, getCharacters } from "../../app/api/api";
import { BASE_URL } from "../../app/constants";

global.fetch = vi.fn();

describe("getCharacters function", () => {
  it("should fetch data based on search term and page", async () => {
    const mockResponse = { data: "some data" };
    (global.fetch as Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await getCharacters("test", "1");

    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}?search=test&page=1`);

    expect(result).toEqual(mockResponse);
  });

  it("should handle fetch failure", async () => {
    (global.fetch as Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(getCharacters("test", "1")).rejects.toThrow(
      "Fetch is failed: Network error"
    );
  });
});

describe("detailsFetch", () => {
  it("should fetch details based on ID", async () => {
    const mockResponse = { data: "detail data" };
    (global.fetch as Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await getCharacterById("123");

    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/123`);

    expect(result).toEqual(mockResponse);
  });
});
