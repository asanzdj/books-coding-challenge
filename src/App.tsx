import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './styles/main.scss'
import styles from './App.module.scss'
import Router from './router'

const App = (): JSX.Element => {
  return (
    <div className={`App ${styles.wrapper}`}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
