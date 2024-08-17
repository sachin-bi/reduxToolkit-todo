import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";



// syntax
export const store = configureStore({
    reducer: todoReducer,
})