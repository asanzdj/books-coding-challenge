import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import omit from 'lodash.omit'

import styles from './BookForm.module.scss'
import TextField from '../../components/TextField/TextField'
import TextArea from '../../components/TextArea/TextArea'
import Button from '../../components/Button/Button'
import Star from '../../components/Star/Star'

type FormData = {
  title: string,
  author: string,
  summary: string,
  stars: number,
};

type BookFormProps = {
  defaultValues?: {
    title: string,
    author: string,
    summary: string,
    stars: number,
  },
  onSubmit: (data: FormData) => void,
  formTitle: string,
  submitLabel: string,
  submitDataCy?: string,
}

const BookForm = ({ defaultValues, onSubmit, formTitle, submitLabel, submitDataCy }: BookFormProps): JSX.Element => {
  const [stars, setStars] = useState(1)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues,
  })

  const submitForm = handleSubmit((data) => {
    onSubmit({ ...data, stars })
  })

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{formTitle}</h1>
      <form onSubmit={submitForm} className={styles.form}>
        <div className={styles.field}>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Is required' }}
            render={({ field }) => (
              <TextField
                label="Title"
                error={errors['title']}
                {...omit(field, ['ref'])}
              />
            )}
          />
        </div>
        <div className={styles.field}>
          <Controller
            name="author"
            control={control}
            rules={{ required: 'Is required' }}
            render={({ field }) => (
              <TextField
                label="Author"
                error={errors['author']}
                {...omit(field, ['ref'])}
              />
            )}
          />
        </div>
        <div className={styles.field}>
          <Controller
            name="summary"
            control={control}
            rules={{ required: 'Is required' }}
            render={({ field }) => (
              <TextArea
                label="Summary"
                error={errors['summary']}
                {...omit(field, ['ref'])}
              />
            )}
          />
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Score</span>
          <div className={styles.stars}>
            {[...Array(5)].map((o, index) => (
              <span
                key={index}
                className={
                  index + 1 <= stars ? styles['selected-star'] : styles.star
                }
                onClick={() => setStars(index + 1)}
                data-cy="score-star"
              >
                <Star  />
              </span>
            ))}
          </div>
        </div>
        <div className={styles.submit}>
          <Button type="submit" data-cy={submitDataCy}>{submitLabel}</Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm
