import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import booksReducer from './redux/books'

const store = configureStore({
  reducer: combineReducers({ products: booksReducer }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
