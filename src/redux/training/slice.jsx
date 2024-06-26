import { createSlice } from "@reduxjs/toolkit";
import { addNewChekout, updateFinishDate, updateStartDate, checkWindowSize, deleteBook, fetchBooksSelected, StartingTraining, fetchTrainingOBJ, markAsCompleted, getTreaningData, andOfTraining } from "./operation";
import { fetchBooks } from "./operation";

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    id: null,
    startDate:  null, 
    finishDate: null,
    size: null,
    books: [
     
    ],
    selectedBooks: [

    ],
    checkout: [
     
    ],
    prevChekout: [],
    isStarted: false,
    isLoading: false,
    userId: null,
    trainingBD: []
  }, 
  extraReducers(builder) {
    builder
    .addCase(getTreaningData.pending, (state, action)=> {
      state.isLoading = true
      })
      .addCase(getTreaningData.fulfilled, (state, action)=> {
      state.id = action.payload.id;
      state.startDate = action.payload.startDate;
      state.finishDate = action.payload.finishDate;
      state.selectedBooks = action.payload.selectedBooks;
      state.checkout = action.payload.checkout;
      state.prevChekout = action.payload.prevChekout;
      // state.isStarted = action.payload.isStarted;
      state.userId = action.payload.userId;
      state.isLoading = false;
      state.isStarted = true
      // console.log(state)
      // state.isLoading = false
      })
      .addCase(updateStartDate.fulfilled, (state, action) => {
        state.startDate = action.payload;
      })
      .addCase(updateFinishDate.fulfilled, (state, action) => {
        state.finishDate = action.payload.finishDate;
        console.log(state.isLoading)
      })
      .addCase(addNewChekout.fulfilled, (state, action) => {
        state.checkout.push(action.payload);
      })
      .addCase(fetchBooks.pending, (state, action) => {
        state.isLoading = true

              
           })
             .addCase(fetchBooks.fulfilled, (state, action) => {

               state.isLoading = false
               state.books = action.payload;
             
           })

      .addCase(fetchBooksSelected.fulfilled, (state, action) => {
        // const bookId = action.payload;
        // console.log(bookId);
        // const books = state.books
        // console.log(books);
        // const bookToAdd = books.find((book) => book.id === bookId);
        // const alreadySelected = state.selectedBooks.find((book) => book.id === bookId);
        // console.log(alreadySelected);
        // if (bookToAdd && !alreadySelected) {
        //   state.selectedBooks.push(bookToAdd);


        // }
        console.log(action.payload);

        state.selectedBooks = action.payload
        console.log();
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const bookIdToDelete = action.payload;
        state.selectedBooks = state.selectedBooks.filter(book => book.id !== bookIdToDelete);
      })
      .addCase(StartingTraining.fulfilled, (state, action) => {
        window.location.href = '/statistics';
      })

      .addCase(fetchTrainingOBJ.fulfilled, (state, action) => {
     state.trainingBD = action.payload
      })
      .addCase(markAsCompleted.fulfilled, (state, action)=> {
        // const bookId = action.payload;
        state.selectedBooks.forEach(book => {
          if (book.id  === action.payload && book.status === "reading"){
            book.status = "completed"
          } else  if (book.id  === action.payload && book.status === "completed"){
            book.status = "reading"
          }
        });
      })
      .addCase(andOfTraining.fulfilled, (state, action)=> {
        state.startDate = null;
      state.finishDate = null;
      state.selectedBooks = [];
      state.checkout =[];
        state.prevChekout = action.payload;
        state.isStarted = false
        // prevChekout: checkout, checkout: [], isStarted: false
      })
      .addCase(checkWindowSize.fulfilled, (state, action)=> {
        state.size = action.payload
      });
    }})
  

// export const { addBook } = trainingSlice.actions;
export const trainingReducer = trainingSlice.reducer;
