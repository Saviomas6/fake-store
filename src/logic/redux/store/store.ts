import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/productReducer";
import themeReducer from "../reducer/themeReducer";

export const store = configureStore({
  reducer: {
    counter: productReducer,
    themeReducer,
  },
});
export type TStore = ReturnType<typeof store.getState>;
