import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import booksReducer from './redux/books'

const rootReducer = combineReducers({ books: booksReducer })

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

export type RootState = ReturnType<typeof rootReducer>
