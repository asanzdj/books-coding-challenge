import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

const Router = (): JSX.Element => {
  return (
    <div className="app__container">
      <Switch>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
  )
}

export default Router
