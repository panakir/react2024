import { ResponseFromApi } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const swapiApi = createApi({
  reducerPath: "swapi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<
      ResponseFromApi,
      { query: string; page: string }
    >({
      query: ({ query, page }) => `?search=${query}&page=${page}`,
    }),
  }),
});

export const { useGetCharactersQuery } = swapiApi;
export default swapiApi;
