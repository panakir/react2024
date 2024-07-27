import { configureStore } from "@reduxjs/toolkit";
import selectItemsReducer from "./slices/selectItemsSlice";

const store = configureStore({
  reducer: {
    selectItem: selectItemsReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
