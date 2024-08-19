import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    addCountries: (state, action) => {
      if (state.length !== 0) return;
      state.push(...action.payload);
    },
  },
});

export { countrySlice };
export const { addCountries } = countrySlice.actions;
