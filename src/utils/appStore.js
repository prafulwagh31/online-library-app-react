import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookSlice.js";

const appStore = configureStore({
    reducer: {
        book: booksReducer,
    },
});

export default appStore;