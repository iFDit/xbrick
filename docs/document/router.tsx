import * as React from 'react'
import { Home } from 'docs/document/async/Home'
import { Document } from 'docs/document/async/Documents'
import { Header } from 'docs/document/header'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />}/>
          <Route path="/home" component={Home}/>
          <Route path="/documents" component={Document}/>
        </Switch>
      </>
    </Router>
  )
}
