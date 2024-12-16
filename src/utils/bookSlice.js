import { createSlice } from "@reduxjs/toolkit";
import booksData from "./BookData";

let localBookData = JSON.parse(localStorage.getItem("onlineLibrarySystem"));

const bookSlice = createSlice({
    name: "books",
    initialState: {
        items: localBookData ? [...localBookData] : [...booksData],
    },
    reducers: {
        addItem : (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("onlineLibrarySystem", JSON.stringify(state.items));
        },
    },
});

export const {addItem} = bookSlice.actions;
export default bookSlice.reducer;