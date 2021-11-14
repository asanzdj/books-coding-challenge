import React, { MouseEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import styles from './Book.module.scss'
import Star from '../Star/Star'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'
import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg'
import { deleteBook } from '../../store/redux/books'

type BookProps = {
  author: string,
  id: string,
  stars: number,
  title: string,
}

const Book = ({ title, author, stars, id, ...props }: BookProps): JSX.Element => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleDelete = () => {
    return (e: MouseEvent) => {
      e.stopPropagation()
      dispatch(deleteBook({ id }))
    }
  }

  return (
    <div className={styles.wrapper}>
      <Link to={`/books/${id}`} className={styles.link} {...props}>
        <div className={styles.info}>
          <div className={styles.stars}>
            {[...Array(stars)].map((o, index) =>
              <Star key={index} />,
            )}
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.author}>{author}</p>
        </div>
      </Link>
      <div className={styles.actions}>
        <span className={styles.edit} onClick={() => history.push(`/books/${id}/edit`)}>
          <PencilIcon />
        </span>
        <span className={styles.delete} onClick={handleDelete()}>
          <TrashIcon />
        </span>
      </div>
    </div>
  )
}

export default Book
