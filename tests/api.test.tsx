import {
  getAllCharacters,
  getCharacter,
  getFilteredCharacters,
} from "../src/assets/shared/api";

describe("testing getAllCharacter function", () => {
  const mockDataResponse = [{ name: "Luke", height: "172" }];

  const mockResponse = {
    ok: true,
    json: vi.fn().mockResolvedValue(mockDataResponse),
  };

  it("should return response without passed arguments", async () => {
    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    const result = await getAllCharacters();

    expect(result).toEqual([{ name: "Luke", height: "172" }]);
  });

  it("should throw error if status not ok ", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 });

    await expect(getAllCharacters()).rejects.toThrow("Request failed");
  });
});

describe("testing getFilteredCharacters function", () => {
  const mockDataResponse = [{ name: "Luke", height: "172" }];
  const query = "luke";
  const page = 1;

  const mockResponse = {
    ok: true,
    json: vi.fn().mockResolvedValue(mockDataResponse),
  };
  it("should return response with passed arguments", async () => {
    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    const result = await getFilteredCharacters(query, page);

    expect(result).toEqual(mockDataResponse);
  });
  it("should return response with passed arguments", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 });

    const mockedResult = vi.fn(
      async () => await getFilteredCharacters(query, page)
    );

    await expect(mockedResult).rejects.toThrow("Request failed");
  });
});

describe("testing getCharacter function", () => {
  it("should return character with passed id", async () => {
    const id = "1";
    const mockDataResponse = [{ id: "1", name: "Luke", height: "172" }];
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockDataResponse),
    };
    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    const result = await getCharacter(id);

    expect(result).toEqual(mockDataResponse);
  });
});
