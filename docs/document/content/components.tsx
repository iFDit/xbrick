import * as React from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { AlertContent } from 'docs/document/content/components/alert'

export const Components = withRouter(props => {
  const { match: { path = '' } = {}} = props
  return (
    <>
      <Route exact path="/documents/components" render={() => <Redirect to={`${path}/alerts`}/>} />
      <Route path={`${path}/alerts`} component={AlertContent} />
    </>
  )
})
