import React, { useEffect } from 'react'

import styles from './Home.module.scss'
import Button from '../../components/Button/Button'
import Book from '../../components/Book/Book'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../store/redux/books'
import { RootState } from '../../store'

const Home = (): JSX.Element => {
  const dispatch = useDispatch()
  const books = useSelector((state: RootState) => state.books.books)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <div>
      <h1 className={styles.title}>My library</h1>

      <div className={styles['actions-bar']}>
        <div className={styles.searcher}>
          SEARCHER
        </div>
        <div className={styles.actions}>
          <Button>Add book</Button>
        </div>
      </div>

      <div className={styles.list}>
        {books.map(book => <Book
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            stars={book.stars}
                            id={book.id} />,
        )}
      </div>
    </div>
  )
}

export default Home
