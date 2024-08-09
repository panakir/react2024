import { BASE_URL } from "@/shared/const";
import { Character, ResponseFromApi } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const swapiApi = createApi({
  reducerPath: "swapi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<
      ResponseFromApi,
      { query: string; page: string }
    >({
      query: ({ query, page }) => `?search=${query}&page=${page}`,
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id: string) => `/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = swapiApi;
export default swapiApi;
