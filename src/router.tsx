import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import BookDetail from './pages/BookDetail/BookDetail'

const Router = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/books/:id" component={BookDetail} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default Router
