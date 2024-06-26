import { createSlice } from "@reduxjs/toolkit";
import { addBook, deleteBook, fetchBooks } from "./operation";

const bookSlice = createSlice({
  name: "books", 
  initialState:{
    book:{
      id:null,
      name: null,
      author: null,
      year:null,
      pages: null,
      status: "planning" || "reading"|| "completed"
    },
    booksBD: [],
    isLoading: false
  },
  extraReducers(builder){
    builder
        .addCase(addBook.fulfilled, (state, action) => {

          state.booksBD.push(action.payload)
        })
        .addCase(fetchBooks.pending, (state, action) => {
   state.isLoading = true
 
         
      })
        .addCase(fetchBooks.fulfilled, (state, action) => {

          state.isLoading = false
          state.booksBD = action.payload;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.booksBD = state.booksBD.filter(book => book.id !== action.payload);
  })

    
       
}
});



export const BookReducer = bookSlice.reducer;


