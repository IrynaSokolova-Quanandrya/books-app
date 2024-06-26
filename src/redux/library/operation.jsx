import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../auth/axiosConfig";

export const addBook = createAsyncThunk('book/addBook', async (bookData, thunkApi) => {
    try {
    // Отримуємо ідентифікатор користувача з локального сховища
    const userId = localStorage.getItem('id');
    
    // Отримуємо існуючі книги користувача
    const { data: userData } = await axios.get(`/users/${userId}`);
    
    // Додаємо нову книгу до масиву книг користувача
    userData.Books.push(bookData);
    
    // Оновлюємо дані користувача у базі даних з новим масивом книг
    await axios.put(`/users/${userId}`, userData);
    
    // Повертаємо дані про додану книгу
    return bookData;
    } catch (error) {
    thunkApi.rejectWithValue(error.message);
    }});

    export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkApi) => {
      try {
        const userId = localStorage.getItem('id');
        const res = await axios.get(`/users/${userId}`);

        
        // Змінено: Повертаємо всі об'єкти з масиву Books
        return res.data.Books;
      } catch (error) {
        // Важливо повертати дані навіть у випадку помилки, щоб `rejectWithValue` мав, що повертати
        return thunkApi.rejectWithValue('Упс, помилка');
      }
    });

    export const deleteBook = createAsyncThunk('books/deleteBook', async (body, thunkApi) => {
      try {
          const userId = localStorage.getItem('id');
          console.log(body);
          const books =  thunkApi.getState().books.booksBD;
          console.log(books);
          // Видаляємо книгу з масиву за допомогою методу filter
         const deletingBooks =books.filter(book => book.id !== body);
         
          await axios.put(`/users/${userId}`, {Books: deletingBooks} );
          
          // Повертаємо id видаленої книги
          return body;
      } catch (error) {
          return thunkApi.rejectWithValue('Упс, помилка');
      }
  });


  export const addResum = createAsyncThunk('book/addResum', async ({ bookId, rating, resume }, thunkApi) => {
    try {
      // Отримуємо ідентифікатор користувача з локального сховища
      const userId = localStorage.getItem('id');
      
      // Отримуємо існуючі книги користувача
      const { data: userData } = await axios.get(`/users/${userId}`);
      
      // Знаходимо книгу за ID
      const bookIndex = userData.Books.findIndex(book => book.id === bookId);
      if (bookIndex === -1) {
        throw new Error('Book not found');
      }
      
      // Оновлюємо книгу з новим об'єктом resum
      userData.Books[bookIndex].resum = { rating, resume };
      
      // Оновлюємо дані користувача у базі даних з новим масивом книг
      await axios.put(`/users/${userId}`, userData);
      
      // Повертаємо оновлену книгу
      return userData.Books[bookIndex];
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });