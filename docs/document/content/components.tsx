import * as React from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { AsyncAlertContent } from 'docs/document/async/content/alert'
import { AsyncBadgeContent } from 'docs/document/async/content/badge'
import { AsyncBreadcrumbContent } from 'docs/document/async/content/breadcrumb'
import { AsyncButtonsContent } from 'docs/document/async/content/buttons'
import { AsyncCardContent } from 'docs/document/async/content/cards'
import { AsyncCarouselContent } from 'docs/document/async/content/carousel'
import { AsyncCollapseContent } from 'docs/document/async/content/collapse'
import { AsyncDropdownContent } from 'docs/document/async/content/dropdown'
import { AsyncFormContent } from 'docs/document/async/content/forms'
import { AsyncInputGroupContent } from 'docs/document/async/content/inputGroup'
import { AsyncJumbotronContent } from 'docs/document/async/content/jumbotron'
import { AsyncLayoutContent } from 'docs/document/async/content/layout'
import { AsyncListGroupContent } from 'docs/document/async/content/listGroup'
import { AsyncMediaContent } from 'docs/document/async/content/media'
import { AsyncModalsContent } from 'docs/document/async/content/modal'
import { AsyncNavbarContent } from 'docs/document/async/content/navbar'
import { AsyncNavsContent } from 'docs/document/async/content/navs'
import { AsyncPaginationContent } from 'docs/document/async/content/pagination'
import { AsyncPopoverContent } from 'docs/document/async/content/popover'
import { AsyncTooltipContent } from 'docs/document/async/content/tooltip'
import { AsyncProgressContent } from 'docs/document/async/content/progress'
import { AsyncTabsContent } from 'docs/document/async/content/tabs'
import { AsyncTablesContent } from 'docs/document/async/content/tables'

// @ts-ignore
// fixed typescript declaration.
// https://github.com/Microsoft/TypeScript/issues/9944
import * as rr from 'react-router'

export const Components = withRouter(props => {
  const { match: { path = '' } = {}} = props
  return (
    <>
      <Route exact path="/documents/components" render={() => <Redirect to={`${path}/alerts`}/>} />
      <Route path={`${path}/alerts`} component={AsyncAlertContent} />
      <Route path={`${path}/badge`} component={AsyncBadgeContent} />
      <Route path={`${path}/breadcrumb`} component={AsyncBreadcrumbContent} />
      <Route path={`${path}/buttons`} component={AsyncButtonsContent} />
      <Route path={`${path}/card`} component={AsyncCardContent} />
      <Route path={`${path}/carousel`} component={AsyncCarouselContent} />
      <Route path={`${path}/collapse`} component={AsyncCollapseContent} />
      <Route path={`${path}/dropdowns`} component={AsyncDropdownContent} />
      <Route path={`${path}/forms`} component={AsyncFormContent} />
      <Route path={`${path}/input-group`} component={AsyncInputGroupContent} />
      <Route path={`${path}/jumbotron`} component={AsyncJumbotronContent} />
      <Route path={`${path}/layout`} component={AsyncLayoutContent} />
      <Route path={`${path}/list-group`} component={AsyncListGroupContent} />
      <Route path={`${path}/modal`} component={AsyncModalsContent} />
      <Route path={`${path}/media`} component={AsyncMediaContent} />
      <Route path={`${path}/navbar`} component={AsyncNavbarContent} />
      <Route path={`${path}/navs`} component={AsyncNavsContent} />
      <Route path={`${path}/pagination`} component={AsyncPaginationContent} />
      <Route path={`${path}/popovers`} component={AsyncPopoverContent} />
      <Route path={`${path}/tooltips`} component={AsyncTooltipContent} />
      <Route path={`${path}/progress`} component={AsyncProgressContent} />
      <Route path={`${path}/tab`} component={AsyncTabsContent} />
      <Route path={`${path}/table`} component={AsyncTablesContent} />
      <Route render={() => <Redirect to="/404.html" />}/>
    </>
  )
})
