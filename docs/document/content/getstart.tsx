import * as React from 'react'
import { AsyncInstall } from 'docs/document/async/content/install'
import { AsyncUsage } from 'docs/document/async/content/usage'
import { Route, withRouter, Redirect } from 'react-router-dom'
// @ts-ignore
// fixed typescript declaration.
// https://github.com/Microsoft/TypeScript/issues/9944
import * as rr from 'react-router'

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
