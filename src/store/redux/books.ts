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
  book: Book | null,
}

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

const initialState = {
  books: [],
  book: null,
} as State

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      return { ...state, books: action.payload }
    })

    builder.addCase(fetchBook.fulfilled, (state, action) => {
      return { ...state, book: action.payload[0] }
    })
  },
})

// export const {} = booksSlice.actions

export default booksSlice.reducer
