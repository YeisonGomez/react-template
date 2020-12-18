import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from '../../Auth/Auth'
import { Home } from '../../Home/Home'

export const Public = () => {
  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}