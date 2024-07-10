import { Character } from "./types";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getFilteredCharacters = async (
  query: string
): Promise<Character[]> => {
  const response = await fetch(`${BASE_URL}?search=${query} `)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => {
      throw new Error(error.message);
    });

  return response;
};

export const getAllCharacters = async (): Promise<Character[]> => {
  const response = await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => data.results)
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
