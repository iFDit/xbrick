import * as React from 'react'
import { AsyncInstall } from 'docs/document/async/content/install'
import { AsyncUsage } from 'docs/document/async/content/usage'
import { Route, withRouter, Redirect } from 'react-router-dom'

export const Getstart = withRouter(props => {
  const { match: { path = '' } = {} } = props
  return (
    <>
      <Route exact path="/documents/getting-started" render={() => <Redirect to={`${path}/install`} />} />
      <Route path={`${path}/install`} component={AsyncInstall} />
      <Route path={`${path}/usage`} component={AsyncUsage} />
    </>
  )
})
