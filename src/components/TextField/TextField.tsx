import React, { ChangeEvent } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './TextField.module.scss'

type TextFieldProps = {
  error?: FieldError,
  label: string,
  name: string,
  type?: 'text' | 'number',
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

const defaultProps = {
  inputType: 'text',
}

const TextField = ({ label, error, value, onChange, name }: TextFieldProps): JSX.Element => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        {...{ name, onChange, value }}
      />
      {error && <span className={styles.error} data-cy="text-field-error">{error.message}</span>}
    </label>
  )
}

TextField.defaultProps = defaultProps

export default TextField
