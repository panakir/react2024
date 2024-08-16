import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
