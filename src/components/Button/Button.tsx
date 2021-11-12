import React from 'react'

import styles from './Button.module.scss'

type ButtonProps = {
  children: string | JSX.Element;
}

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.wrapper} {...props}>
      {children}
    </button>
  )
}

export default Button
