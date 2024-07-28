import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  page: "1",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updatePage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { updatePage, updateQuery } = searchSlice.actions;
export default searchSlice.reducer;
