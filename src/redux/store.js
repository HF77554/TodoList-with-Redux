import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./tasksReducer";

export const store = configureStore({
  reducer: { tasks: todoReducer }
});
