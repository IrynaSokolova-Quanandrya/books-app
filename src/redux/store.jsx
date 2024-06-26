import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { trainingReducer } from "./training/slice";
import { AuthReducer } from "./auth/slice";

import { BookReducer, changeFilterReducer } from "./library/slice";

const persistConfig = {
key: 'root',
storage,
whitelist: ['auth']
};

const rootReducer = combineReducers({
books: BookReducer,
training: trainingReducer,
auth: AuthReducer,


});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
reducer: persistedReducer
});

export const persistor = persistStore(store);