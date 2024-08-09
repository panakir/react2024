import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import selectItemsReducer from "./slices/selectItemsSlice";
import charactersReducer from "./slices/charactersSlice";
import searchReducer from "./slices/searchSlice";
import swapiApi from "./api/swapiAPi";

export const makeStore = (): EnhancedStore =>
  configureStore({
    reducer: {
      selectItem: selectItemsReducer,
      characters: charactersReducer,
      search: searchReducer,
      [swapiApi.reducerPath]: swapiApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(swapiApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
