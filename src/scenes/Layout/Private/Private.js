import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from '../../Auth/Auth'
import { Home } from '../../Home/Home'

export const Private = () => {
  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  )
}