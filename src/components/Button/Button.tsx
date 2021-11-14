import React from 'react'

import styles from './Button.module.scss'

type ButtonProps = {
  children: string | JSX.Element;
  onClick?: () => void
  type: 'button' | 'submit'
}

const defaultProps = {
  type: 'button',
}

const Button = ({ children, onClick, type, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.wrapper} onClick={onClick} type={type} {...props}>
      {children}
    </button>
  )
}

Button.defaultProps = defaultProps

export default Button
