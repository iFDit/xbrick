import * as React from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { AlertContent } from 'docs/document/content/components/alert'
import { BadgeContent } from 'docs/document/content/components/badge'
import { BreadcrumbContent } from 'docs/document/content/components/breadcrumb'
import { ButtonsContent } from 'docs/document/content/components/buttons'
import { CardContent } from 'docs/document/content/components/cards'
import { CarouselContent } from 'docs/document/content/components/carousel'
import { CollapseContent } from 'docs/document/content/components/collapse'
import { DropdownContent } from 'docs/document/content/components/dropdown'
import { FormContent } from 'docs/document/content/components/forms'
import { InputGroupContent } from 'docs/document/content/components/inputGroup'
import { JumbotronContent } from 'docs/document/content/components/jumbotron'
import { LayoutContent } from 'docs/document/content/components/layout'
import { ListGroupContent } from 'docs/document/content/components/listGroup'
import { ModalsContent } from 'docs/document/content/components/modal'
import { MediaContent } from 'docs/document/content/components/media'
import { NavbarContent } from 'docs/document/content/components/navbar'
import { NavsContent } from 'docs/document/content/components/navs'
import { PaginationContent } from 'docs/document/content/components/pagination'
import { PopoverContent } from 'docs/document/content/components/popover'
import { TooltipContent } from 'docs/document/content/components/tooltip'
import { ProgressContent } from 'docs/document/content/components/progress'
import { TabsContent } from 'docs/document/content/components/tabs'

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
      <Route path={`${path}/card`} component={CardContent} />
      <Route path={`${path}/carousel`} component={CarouselContent} />
      <Route path={`${path}/collapse`} component={CollapseContent} />
      <Route path={`${path}/dropdowns`} component={DropdownContent} />
      <Route path={`${path}/forms`} component={FormContent} />
      <Route path={`${path}/input-group`} component={InputGroupContent} />
      <Route path={`${path}/jumbotron`} component={JumbotronContent} />
      <Route path={`${path}/layout`} component={LayoutContent} />
      <Route path={`${path}/list-group`} component={ListGroupContent} />
      <Route path={`${path}/modal`} component={ModalsContent} />
      <Route path={`${path}/media`} component={MediaContent} />
      <Route path={`${path}/navbar`} component={NavbarContent} />
      <Route path={`${path}/navs`} component={NavsContent} />
      <Route path={`${path}/pagination`} component={PaginationContent} />
      <Route path={`${path}/popovers`} component={PopoverContent} />
      <Route path={`${path}/tooltips`} component={TooltipContent} />
      <Route path={`${path}/progress`} component={ProgressContent} />
      <Route path={`${path}/tab`} component={TabsContent} />
    </>
  )
})
