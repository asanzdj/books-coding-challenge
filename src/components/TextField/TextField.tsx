import React, { ChangeEvent } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './TextField.module.scss'

type TextFieldProps = {
  error?: FieldError,
  label: string,
  name: string,
  inputType?: 'text' | 'number',
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

const defaultProps = {
  inputType: 'text',
}

const TextField = ({ label, error, value, onChange, name, inputType }: TextFieldProps): JSX.Element => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        type={inputType}
        {...{ name, onChange, value }}
      />
      {error && <span className={styles.error}>{error.message}</span>}
    </label>
  )
}

TextField.defaultProps = defaultProps

export default TextField
