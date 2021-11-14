import React from 'react'
import { FieldError } from 'react-hook-form'

import styles from './TextField.module.scss'

type TextFieldProps = {
  label: string,
  error?: FieldError,
}

const TextField = ({ label, error, ...props }: TextFieldProps): JSX.Element => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        {...props}
      />
      <span className={styles.error}>{error}</span>
    </label>
  )
}

export default TextField
