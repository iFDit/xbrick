import * as React from 'react'
import { Getstart } from 'docs/document/content/getstart'
import { Components } from 'docs/document/content/components'
import { Route, Switch, withRouter } from 'react-router-dom'

export const Content = withRouter((props: any) => {
  const { match: { path = '' } = {} } = props
  return (
    <Switch>
      <Route path={`${path}/getting-started`} component={Getstart}/>
      <Route path={`${path}/components`} component={Components}/>
    </Switch>
  )
})
