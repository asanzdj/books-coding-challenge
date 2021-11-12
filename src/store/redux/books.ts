import { createSlice } from '@reduxjs/toolkit'

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {},
  extraReducers: {},
})

// export const {} = booksSlice.actions

export default booksSlice.reducer
