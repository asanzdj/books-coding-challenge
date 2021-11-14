import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import BackLink from '../../components/BackLink/BackLink'
import { editBook, fetchBook } from '../../store/redux/books'
import BookForm from '../../components/BookForm/BookForm'
import { RootState } from '../../store'

type FormData = {
  title: string,
  author: string,
  summary: string,
  stars: number,
};

const EditBook = (): JSX.Element => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams<{id?: string}>()
  const book = useSelector((state: RootState) => state.books.book)

  useEffect(() => {
    dispatch(fetchBook({ id }))
  }, [])

  const defaultValues = {
    title: book?.title || '',
    author: book?.author || '',
    summary: book?.summary || '',
    stars: book?.stars || 1,
  }

  const onSubmit = ((data: FormData) => {
    dispatch(editBook({ ...data, id: id || '' }))
    history.push('/')
  })

  return book
    ? (
      <div>
        <BackLink path="/">Go back</BackLink>
        <BookForm
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          formTitle="Edit the book"
          submitLabel="Edit"
        />
      </div>
    )
    : <div />
}

export default EditBook
