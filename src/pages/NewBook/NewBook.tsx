import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import omit from 'lodash.omit'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import styles from './NewBook.module.scss'
import TextField from '../../components/TextField/TextField'
import BackLink from '../../components/BackLink/BackLink'
import TextArea from '../../components/TextArea/TextArea'
import Button from '../../components/Button/Button'
import { createBook } from '../../store/redux/books'
import Star from '../../components/Star/Star'

type FormData = {
  title: string,
  author: string,
  summary: string,
  stars: number,
};

const NewBook = (): JSX.Element => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [stars, setStars] = useState(1)

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      title: '',
      author: '',
      summary: '',
      stars: 1,
    },
  })
  const onSubmit = handleSubmit(data => {
    dispatch(createBook({...data, stars }))
    history.push('/')
  })

  return (
    <div className={styles.wrapper}>
      <BackLink path="/">Go back</BackLink>
      <h1 className={styles.title}>Add a new book</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.field}>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Is required' }}
            render={({ field }) =>
              <TextField
                label="Title"
                error={errors['title']}
                {...omit(field, ['ref'])}
              />}
          />
        </div>
        <div className={styles.field}>
          <Controller
            name="author"
            control={control}
            rules={{ required: 'Is required' }}
            render={({ field }) =>
              <TextField
                label="Author"
                error={errors['author']}
                {...omit(field, ['ref'])}
              />}
          />
        </div>
        <div className={styles.field}>
          <Controller
            name="summary"
            control={control}
            rules={{ required: 'Is required' }}
            render={({ field }) =>
              <TextArea
                label="Summary"
                error={errors['summary']}
                {...omit(field, ['ref'])}
              />}
          />
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Score</span>
          <div className={styles.stars}>
            {[...Array(5)].map((o, index) =>
              <span key={index} className={(index + 1) <= stars ? styles['selected-star'] : styles.star}>
                <Star  onClick={() => setStars(index + 1)} />
              </span>,
            )}
          </div>
        </div>
        <div className={styles.submit}>
          <Button type='submit'>Add</Button>
        </div>
      </form>
    </div>
  )
}

export default NewBook
