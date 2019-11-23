import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Auth } from '../../Auth/Auth'

export const Public = () => {
  return (
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Auth} />
      </Switch>
    </Router>
  )
}