import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./slices/formSlice";
import { countrySlice } from "./slices/countrySlice";

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    country: countrySlice.reducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
