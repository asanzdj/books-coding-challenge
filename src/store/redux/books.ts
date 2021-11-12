import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

type Book = {
  title: string,
  id: string,
  author: string,
  summary: string,
  stars: number,
}

type State = {
  books: Book[]
}

export const fetchBooks = createAsyncThunk(
  'books/fetch',
  async () => {
    const response = await fetch('http://localhost:3001/books')
    return await response.json()
  },
)

const initialState = {
  books: [],
} as State

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      return { ...state, books: action.payload }
    })
  },
})

// export const {} = booksSlice.actions

export default booksSlice.reducer
