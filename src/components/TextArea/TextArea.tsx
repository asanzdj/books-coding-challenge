import React, { ChangeEvent } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './TextArea.module.scss'

type TextFieldProps = {
  error?: FieldError,
  label: string,
  name: string,
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  value: string,
}

const TextArea = ({ label, error, value, onChange, name }: TextFieldProps): JSX.Element => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <textarea
        className={styles.input}
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && <span className={styles.error} data-cy="text-area-error">{error.message}</span>}
    </label>
  )
}

export default TextArea
