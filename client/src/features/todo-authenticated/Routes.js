import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import TodoApp from './todo/TodoApp'
import Login from './auth/Login'
import Signup from './auth/Signup'
import AuthRoute from './auth/AuthRoute'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <AuthRoute exact path="/">
          <TodoApp />
        </AuthRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  )
}
