import * as React from 'react'
import { AlertContent } from 'docs/document/content/alert'
import { Route, Switch } from 'react-router-dom'

export const Content = (props: any) => {
  const { match } = props
  return (
    <Switch>
      <Route path={`${match.path}/alert`} component={AlertContent}/>
    </Switch>
  )
}
