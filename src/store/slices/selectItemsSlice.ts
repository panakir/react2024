import { Character } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Character[] = [];

const selectItemsSlice = createSlice({
  name: "selectItems",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Character>) => {
      state.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<Character>) => {
      return state.filter((item) => item.url !== action.payload.url);
    },
    deleteAllItems: (state) => {
      state = [];
      return state;
    },
  },
});

export const { addItem, deleteItem, deleteAllItems } = selectItemsSlice.actions;
export default selectItemsSlice.reducer;
