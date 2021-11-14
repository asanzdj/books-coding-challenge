import React, { MouseEvent } from 'react'

import styles from './Star.module.scss'

type StarProps = {
  onClick?: (e: MouseEvent<HTMLInputElement> ) => void
}

const Star = ({ onClick }: StarProps): JSX.Element => {
  return (
    <div className={styles.wrapper} onClick={onClick} />
  )
}

export default Star
