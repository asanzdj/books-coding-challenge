import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as ArrowIcon } from '../../assets/icons/left_arrow.svg'
import styles from './BackLink.module.scss'

type BackLinkProps = {
  path: string,
  children: string,
}

const BackLink = ({ path, children }: BackLinkProps): JSX.Element => {
  return <Link to={path} className={styles.wrapper}>
    <span className={styles.arrow}>
      <ArrowIcon />
    </span>
    {children}
  </Link>
}

export default BackLink
