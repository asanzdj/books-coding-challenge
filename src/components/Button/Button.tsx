import React from 'react'

import styles from './Button.module.scss'

type ButtonProps = {
  children: string | JSX.Element;
  onClick: () => void
}

const Button = ({ children, onClick, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.wrapper} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
