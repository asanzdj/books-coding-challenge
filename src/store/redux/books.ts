import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { sort } from '../../utils/sorting'

type Book = {
  title: string,
  id: string,
  author: string,
  summary: string,
  stars: number,
}

type NewBook = {
  title: string,
  author: string,
  summary: string,
  stars: number,
}

type State = {
  books: Book[]
  book: Book | null,
  sorting: {
    direction: 'ASC' | 'DESC',
    category: string,
  },
}

export const initialState = {
  books: [],
  book: null,
  sorting: {
    direction: 'ASC',
    category: 'title',
  },
} as State

export const fetchBooks = createAsyncThunk(
  'books/fetch',
  async () => {
    const response = await fetch('http://localhost:3001/books')
    return await response.json()
  },
)

export const fetchBook = createAsyncThunk(
  'books/get-book',
  async ({ id }: { id?: string }) => {
    const response = await fetch(`http://localhost:3001/books?id=${id}`)
    return await response.json()
  },
)

export const deleteBook = createAsyncThunk(
  'books/delete',
  async ({ id }: { id?: string }) => {
    const response = await fetch('http://localhost:3001/books/' + id, {
      method: 'DELETE',
    })
    return await response.json()
  },
)

export const filterByTerm = createAsyncThunk(
  'books/filter',
  async ({ term }: { term?: string }) => {
    const path = term ? `/_search?title=${term}` : ''
    const response = await fetch(`http://localhost:3001/books${path}`)
    return await response.json()
  },
)

export const createBook = createAsyncThunk(
  'books/new',
  async (data: NewBook) => {
    const response = await fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  },
)

export const editBook = createAsyncThunk(
  'books/edit',
  async (data: Book) => {
    const response = await fetch('http://localhost:3001/books/' + data.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  },
)

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    setSort: (state, { payload }) => ({
      ...state,
      sorting: payload,
      books: sort(state.books)(payload.category, payload.direction),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      return {
        ...state,
        books: sort(action.payload)(state.sorting.category, state.sorting.direction),
      }
    })

    builder.addCase(fetchBook.fulfilled, (state, action) => {
      return { ...state, book: action.payload[0] }
    })

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      return { ...state, books: state.books.filter(book => book.id !== action.meta.arg.id) }
    })

    builder.addCase(filterByTerm.fulfilled, (state, action) => {
      return { ...state, books: action.payload }
    })

    builder.addCase(createBook.fulfilled, (state, action) => {
      return { ...state, books: [...state.books, action.payload] }
    })

    builder.addCase(editBook.fulfilled, (state, action) => {
      const books = state.books.map(book => book.id === action.payload.id ? action.payload : book)
      return { ...state, books: books }
    })
  },
})

export const {
  setSort,
} = booksSlice.actions

export default booksSlice.reducer
