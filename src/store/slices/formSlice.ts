import { FormDataType } from "@/core/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FormDataType[] = [];

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.unshift(action.payload);
    },
    addLastForm: (state, action) => {
      state.pop();
      state.unshift({ ...action.payload, last: true });
    },
  },
});

export { formSlice };
export const { addForm, addLastForm } = formSlice.actions;
