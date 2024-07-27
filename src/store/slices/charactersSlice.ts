import { Character } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Character[] = [];

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCurrentCharacters: (state, action: PayloadAction<Character[]>) => {
      state.push(...action.payload);
    },
  },
});

export const { addCurrentCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
