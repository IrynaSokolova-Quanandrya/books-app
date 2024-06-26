import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../auth/axiosConfig";
import { selectBooks } from "./selectors";

export const fetchBooksSelected = createAsyncThunk('tarining/fetchBooksSelected', async (_, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const res = await axios.get(`/training/${idTraining}`);  
    // Змінено: Повертаємо всі об'єкти з масиву Books
    console.log(res.data);

    return res.data.selectedBooks;
  } catch (error) {
    // Важливо повертати дані навіть у випадку помилки, щоб `rejectWithValue` мав, що повертати
    return thunkApi.rejectWithValue('Упс, помилка');
  }
});

export const updateStartDate = createAsyncThunk("training/updateStartDate", async (body, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const startDate = body.startDate
    let response;

    if (idTraining) {
      response = await axios.put(`/training/${idTraining}`, {startDate });
    } else {
      response = await axios.post("/training", body);
      localStorage.setItem('idTraining', response.data.id);
    }

    console.log(response.data);
  
    return response.data.startDate;
  } catch (error) {
    return thunkApi.rejectWithValue('Упс, помилка');
  }
});

export const updateFinishDate = createAsyncThunk("training/updateFinishDate",async (body, thunkApi) => {
    try {
      const idTraining = localStorage.getItem('idTraining');
        const response = await axios.put(`/training/${idTraining}`, { finishDate: body });
        console.log(body);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);


export const addNewChekout = createAsyncThunk(
  "training/addNewChekout",
  async ({checkoutData, trId}) => {
    try {
      console.log(trId);
      const getting = await axios.get(`/training/${trId}`);
      const checkout = getting.data.checkout
      
      checkout.push(checkoutData)  
        await axios.put(`/training/${trId}`, {checkout});
      return checkoutData;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const addBook = createAsyncThunk("training/addBook", async (body, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const { data: trainingData } = await axios.get(`/training/${idTraining}`);
    
   
    // console.log()
    if(body.status === "planning"){
    trainingData.selectedBooks.push({...body, status: "reading"});}
    
    const res = await axios.put(`/training/${idTraining}`, { selectedBooks: trainingData.selectedBooks });
    const userId = localStorage.getItem('id');
    
    // Отримуємо існуючі книги користувача
    const { data: userData } = await axios.get(`/users/${userId}`);
    
    // Додаємо нову книгу до масиву книг користувача
    userData.Books.forEach(book => {
      if (book.id  === body.id && book.status === "planning"){
        book.status = "reading"
      } 
    })
    
    // Оновлюємо дані користувача у базі даних з новим масивом книг
    await axios.put(`/users/${userId}`, userData);
    return res.id;
  } catch (error) {
    return error.response.data;
  }
});

export const deleteBook = createAsyncThunk("training/deleteBook", async (body, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const books = thunkApi.getState().training.selectedBooks;
    const deletingBooks = books.filter(book => book.id !== body);
    await axios.put(`/training/${idTraining}`, { selectedBooks: deletingBooks });

    const userId = localStorage.getItem('id');
    
    // Отримуємо існуючі книги користувача
    const { data: userData } = await axios.get(`/users/${userId}`);
    
    // Додаємо нову книгу до масиву книг користувача
    userData.Books.forEach(book => {
      if (book.id  === body){
        book.status = "planning"
      } 
    })
    
    // Оновлюємо дані користувача у базі даних з новим масивом книг
    await axios.put(`/users/${userId}`, userData);
  } catch (error) {
    return error.response.data;
  }
});
export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkApi) => {
  try {
    const userId = localStorage.getItem('id');
    const res = await axios.get(`/users/${userId}`);
    console.log(res.data.Books);
    
    // Змінено: Повертаємо всі об'єкти з масиву Books
    return res.data.Books;
  } catch (error) {
    // Важливо повертати дані навіть у випадку помилки, щоб `rejectWithValue` мав, що повертати
    return thunkApi.rejectWithValue('Упс, помилка');
  }
});

export const StartingTraining = createAsyncThunk("training/StartingTraining",async (body, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const getting = await axios.get(`/training/${idTraining}`);
    const books = getting.data.selectedBooks
    books.forEach(book => book.status = "reading")
    
      const response = await axios.put(`/training/${idTraining}`, {isStarted: true, selectedBooks: books });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
);

export const fetchTrainingOBJ = createAsyncThunk('training/fetchBooksSelected', async (_, thunkApi) => {
  try {
    const idTraining = localStorage.getItem('idTraining');
    const res = await axios.get(`/training/${idTraining}`);

    
    // Змінено: Повертаємо всі об'єкти з масиву Books
    console.log(res.data);

    return res.data;
  } catch (error) {
    // Важливо повертати дані навіть у випадку помилки, щоб `rejectWithValue` мав, що повертати
    return thunkApi.rejectWithValue('Упс, помилка');
  }}
)

export const markAsCompleted = createAsyncThunk(
  "training/markAsCompleted",
  async ({bookId, trId}) => {
    try {
      const getting = await axios.get(`/training/${trId}`);
    const books = getting.data.selectedBooks
      
      books.forEach(book => {
        if (book.id  === bookId && book.status === "reading"){
          book.status = "completed"
        } else  if (book.id  === bookId && book.status === "completed"){
          book.status = "reading"
        }
      })

      const userId = localStorage.getItem('id');

    const { data: userData } = await axios.get(`/users/${userId}`);
    
    userData.Books.forEach(book => {
        if (book.id  === bookId && book.status === "reading"){
          book.status = "completed"
        } else  if (book.id  === bookId && book.status === "completed"){
          book.status = "reading"
        }
      });

      await axios.put(`/users/${userId}`, userData);
      await axios.put(`/training/${trId}`, {selectedBooks: books});
      return bookId;
    } catch (error) {
      return error.response.data;
    }
  }
)

export const getTreaningData = createAsyncThunk(
  "training/getTreaningData",
  async () => {
    try {
      const response = await axios.get("/training");
      const current = localStorage.getItem('id');
      let neededData = ''
      response.data.forEach(train => {if(train.userId ===  current){
        neededData = train
      }});
      
      return neededData

    } catch (error) {
      return error.response.data;
    }
  }
);

export const checkWindowSize = createAsyncThunk(
  "training/checkWindowSize",
  async (size) => {
    try { 
      return size

    } catch (error) {
      return error.response.data;
    }
  }
);

export const andOfTraining = createAsyncThunk(
  "training/andOfTraining",
  async (trId) => {
    try {
      console.log(trId);
      const getting = await axios.get(`/training/${trId}`);
      const checkout = getting.data.checkout
  
        await axios.put(`/training/${trId}`, {prevChekout: checkout, checkout: [], isStarted: false, startDate: null, finishDate: null, selectedBooks: [] });

        const userId = localStorage.getItem('id');

        const { data: userData } = await axios.get(`/users/${userId}`);
        
        userData.Books.forEach(book => {
            if (book.status === "reading"){
              book.status = "planning"
            } 
          });
    
          await axios.put(`/users/${userId}`, userData);
      return checkout;
    } catch (error) {
      return error.response.data;
    }
  }
);

