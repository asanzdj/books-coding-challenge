import React, { useState, ChangeEvent } from 'react'

import styles from './Searcher.module.scss'
import { ReactComponent as MagnifyingGlassIcon } from '../../assets/icons/magnifying_glass.svg'
import { ReactComponent as TimesIcon } from '../../assets/icons/times.svg'

type SearcherProps = {
  onSearch: (term: string) => void,
}

const Searcher = ({ onSearch }: SearcherProps): JSX.Element => {
  const [term, setTerm] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = e.target.value.toLowerCase()
    setTerm(searchTerm)
    onSearch(searchTerm)
  }

  const handleClear = (): void => {
    setTerm('')
    onSearch('')
  }

  return (
    <div className={styles.wrapper}>
      <input type='text' value={term} onChange={handleChange} className={styles.input} />
      <span className={styles.icon}>
        {term
          ? <span className={styles['clear-icon']} onClick={handleClear}><TimesIcon /></span>
          : <MagnifyingGlassIcon />
        }
      </span>
    </div>
  )
}

export default Searcher
