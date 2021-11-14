import React from 'react'

import styles from './Sorter.module.scss'
import { ReactComponent as UpArrowIcon } from '../../assets/icons/up_arrow.svg'

type SortingType = {
  category: string,
  direction: 'ASC' | 'DESC',
}

type SorterProps = {
  category: string,
  direction: 'ASC' | 'DESC',
  onSort: (sorting: SortingType) => void,
}

// TODO: Multiple choices: author, starts, title
const Sorter = ({ category, direction, onSort }: SorterProps): JSX.Element => {
  const isDesc = direction === 'DESC'

  const handleClick = (): void => {
    onSort({
      category: category,
      direction: isDesc ? 'ASC' : 'DESC',
    })
  }

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <p className={styles.category}>Sort by {category}</p>
      <span className={`${styles.symbol} ${isDesc && styles['symbol--desc']}`}>
        <UpArrowIcon />
      </span>
    </div>
  )
}

export default Sorter
