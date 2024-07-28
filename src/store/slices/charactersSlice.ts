import { Character } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  current: <Character[]>[],
  details: <Character>{},
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCurrentCharacters: (state, action: PayloadAction<Character[]>) => {
      state.current.push(...action.payload);
    },
    addDetailsCharacter: (state, action: PayloadAction<Character>) => {
      state.details = action.payload;
    },
  },
});

export const { addCurrentCharacters, addDetailsCharacter } =
  charactersSlice.actions;
export default charactersSlice.reducer;
