import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Book.module.scss'

type BookProps = {
  author: string,
  id: string,
  stars: number,
  title: string,
}

const Book = ({ title, author, stars, ...props }: BookProps): JSX.Element => {
  return (
    <Link to="" className={styles.wrapper} {...props}>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
      </div>
      <div className={styles.stars}>
        {[...Array(stars)].map((o, index) =>
          <div className={styles.star} key={index} />,
        )}
      </div>
    </Link>
  )
}

export default Book
