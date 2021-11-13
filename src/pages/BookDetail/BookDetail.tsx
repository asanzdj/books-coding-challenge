import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import styles from './BookDetail.module.scss'
import Button from '../../components/Button/Button'
import { RootState } from '../../store'
import { fetchBook } from '../../store/redux/books'
import Star from '../../components/Star/Star'
import BackLink from '../../components/BackLink/BackLink'

const BookDetail = (): JSX.Element => {
  const dispatch = useDispatch()
  const { id } = useParams<{id?: string}>()
  const book = useSelector((state: RootState) => state.books.book)

  useEffect(() => {
    dispatch(fetchBook({ id }))
  }, [])


  return (
    <div className={styles.wrapper}>
      <BackLink path="/">Go back</BackLink>
      <div className={styles.actions}>
        <Button>Delete</Button>
        <Button>Edit</Button>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.title}>{book?.title}</p>
          <p className={styles.author}>{book?.author}</p>
        </div>
        <div className={styles.stars}>
          {[...Array(book?.stars)].map((o, index) =>
            <Star key={index} />,
          )}
        </div>
      </div>
      <p className={styles.summary}>{book?.summary}</p>

    </div>
  )
}

export default BookDetail
