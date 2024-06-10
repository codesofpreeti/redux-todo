import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/features/slice";

export const store = configureStore({
  reducer: todoReducer,
});
