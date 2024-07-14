import { Character, ResponseFromApi } from "./types";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getFilteredCharacters = async (
  query: string,
  page: number
): Promise<ResponseFromApi> => {
  const response = await fetch(`${BASE_URL}?search=${query}&page=${page}`)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error.message);
    });

  return response;
};

export const getAllCharacters = async (
  page = "1"
): Promise<ResponseFromApi> => {
  const response = await fetch(`${BASE_URL}?page=${page}`)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error.message);
    });

  return response;
};

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(BASE_URL + id)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error.message);
    });
  return response;
};
