import * as React from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { AlertContent } from 'docs/document/content/components/alert'
import { BadgeContent } from 'docs/document/content/components/badge'
import { BreadcrumbContent } from 'docs/document/content/components/breadcrumb'
import { ButtonsContent } from 'docs/document/content/components/buttons'
// @ts-ignore
// fixed typescript declaration.
// https://github.com/Microsoft/TypeScript/issues/9944
import * as rr from 'react-router'

export const Components = withRouter(props => {
  const { match: { path = '' } = {}} = props
  return (
    <>
      <Route exact path="/documents/components" render={() => <Redirect to={`${path}/alerts`}/>} />
      <Route path={`${path}/alerts`} component={AlertContent} />
      <Route path={`${path}/badge`} component={BadgeContent} />
      <Route path={`${path}/breadcrumb`} component={BreadcrumbContent} />
      <Route path={`${path}/buttons`} component={ButtonsContent} />
    </>
  )
})
