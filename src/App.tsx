import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import styles from './App.module.scss'
import Router from './router'

const App = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <div className={styles.container}>
          <Router />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
