import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Home.module.scss'
import Button from '../../components/Button/Button'
import Book from '../../components/Book/Book'
import { fetchBooks, filterByTerm, setSort } from '../../store/redux/books'
import { RootState } from '../../store'
import Sorter from '../../components/Sorter/Sorter'
import Searcher from '../../components/Searcher/Searcher'

type SortingType = {
  category: string,
  direction: 'ASC' | 'DESC',
}

const Home = (): JSX.Element => {
  const dispatch = useDispatch()
  const history = useHistory()
  const books = useSelector((state: RootState) => state.books.books)
  const sorting = useSelector((state: RootState) => state.books.sorting)

  const handleSort = (newSorting: SortingType): void => {
    dispatch(setSort(newSorting))
  }

  const handleSearch = (term: string): void => {
    dispatch(filterByTerm({ term }))
  }

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <div>
      <h1 className={styles.title}>My library</h1>
      <div className={styles['actions-bar']}>
        <div className={styles.searcher}>
          <Searcher onSearch={handleSearch} />
        </div>
        <div className={styles.actions}>
          <Button onClick={() => history.push('/books/new')}>Add book</Button>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.sorting}>
          <Sorter onSort={handleSort} {...sorting} />
        </div>
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
