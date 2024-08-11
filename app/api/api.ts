import { Character, ResponseFromApi } from "../../src/shared/types";
import { BASE_URL } from "../constants";

const getCharacters = async (
  searchQuery: string,
  pageNumber: string
): Promise<ResponseFromApi> => {
  const response = await fetch(
    `${BASE_URL}?search=${searchQuery}&page=${pageNumber}`
  )
    .then((res) => res.json())
    .catch((error) => {
      throw new Error("Fetch is failed: " + error.message);
    });

  return response;
};

const getCharacterById = async (id: string): Promise<Character> => {
  const response = await fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error("Fetch is failed: " + error.message);
    });
  return response;
};

export { getCharacters, getCharacterById };
