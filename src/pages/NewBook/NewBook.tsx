import React  from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import BackLink from '../../components/BackLink/BackLink'
import { createBook } from '../../store/redux/books'
import BookForm from '../../components/BookForm/BookForm'

type FormData = {
  title: string,
  author: string,
  summary: string,
  stars: number,
};


const NewBook = (): JSX.Element => {
  const dispatch = useDispatch()
  const history = useHistory()

  const defaultValues = {
    title: '',
    author: '',
    summary: '',
    stars: 1,
  }

  const onSubmit = ((data: FormData) => {
    dispatch(createBook(data))
    history.push('/')
  })

  return (
    <div>
      <BackLink path="/">Go back</BackLink>
      <BookForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        formTitle="Add a new book"
        submitLabel="Add"
        submitDataCy="submit-create"
      />
    </div>
  )
}

export default NewBook
