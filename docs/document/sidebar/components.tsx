import * as React from 'react'
import { get } from 'lodash'
import { Nav, NavItem, NavLink, Collapse } from 'xbrick'
import { Link, withRouter } from 'react-router-dom'
// @ts-ignore
// fixed typescript declaration.
// https://github.com/Microsoft/TypeScript/issues/9944
import * as rr from 'react-router'

export class Components extends React.Component<any> {
  static getDerivedStateFromProps(props: any, state: any) {
    // tslint:disable-next-line
    const open = !!~get(props, 'location.pathname', '').indexOf(ROOT)
    if (get(props, 'location.pathname') !== state.pathname) {
      return { ...state, open, pathname: get(props, 'location.pathname') }
    }
    return state
  }

  public state = {
    // tslint:disable-next-line
    open: !!~get(this.props, 'location.pathname', '').indexOf(ROOT),
    pathname: get(this.props, 'location.pathname'),
  }

  private toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  private itemActive = (itemRoute: string = '') => {
    // tslint:disable-next-line
    return !!~get(this.props, 'location.pathname', '').indexOf(itemRoute)
  }

  render () {
    const { open } = this.state
    const { match = {} } = this.props
    const { path } = match
    const inRoot = this.itemActive(ROOT)
    return (
      <>
        <NavLink href="#" active={inRoot} render={inRoot} onClick={() => this.toggle()}>
          {inRoot ? 'Components' : <Link to={`/documents/components`} onClick={() => this.toggle()}>Components</Link>}
        </NavLink>
        <Collapse open={open}>
          {() => (
            <Nav vertical>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${ALERTS}`)}>
                  <Link to={`${path}/${ALERTS}`}>Alerts</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${BADGE}`)}>
                  <Link to={`${path}/${BADGE}`}>Badge</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${BREADCRUMB}`)}>
                  <Link to={`${path}/${BREADCRUMB}`}>Breadcrumb</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${BUTTONS}`)}>
                  <Link to={`${path}/${BUTTONS}`}>Buttons</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${CARD}`)}>
                  <Link to={`${path}/${CARD}`}>Card</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${CAROUSEL}`)}>
                  <Link to={`${path}/${CAROUSEL}`}>Carousel</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${COLLAPSE}`)}>
                  <Link to={`${path}/${COLLAPSE}`}>Collapse</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${DROPDOWN}`)}>
                  <Link to={`${path}/${DROPDOWN}`}>Dropdowns</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${FORMS}`)}>
                  <Link to={`${path}/${FORMS}`}>Forms</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${INPUT_GROUP}`)}>
                  <Link to={`${path}/${INPUT_GROUP}`}>Input group</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${JUMBOTRON}`)}>
                  <Link to={`${path}/${JUMBOTRON}`}>Jumbotron</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${LAYOUT}`)}>
                  <Link to={`${path}/${LAYOUT}`}>Layout</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${LIST_GROUP}`)}>
                  <Link to={`${path}/${LIST_GROUP}`}>List group</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${MEDIA}`)}>
                  <Link to={`${path}/${MEDIA}`}>Media</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${MODAL}`)}>
                  <Link to={`${path}/${MODAL}`}>Modal</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${NAVBAR}`)}>
                  <Link to={`${path}/${NAVBAR}`}>Navbar</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${NAVS}`)}>
                  <Link to={`${path}/${NAVS}`}>Navs</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${PAGINATION}`)}>
                  <Link to={`${path}/${PAGINATION}`}>Pagination</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${POPOVERS}`)}>
                  <Link to={`${path}/${POPOVERS}`}>Popovers</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${PROGRESS}`)}>
                  <Link to={`${path}/${PROGRESS}`}>Progress</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${TOOLTIPS}`)}>
                  <Link to={`${path}/${TOOLTIPS}`}>Tooltips</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${TABLE}`)}>
                  <Link to={`${path}/${TABLE}`}>Table</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink render={false} active={this.itemActive(`${path}/${TAB}`)}>
                  <Link to={`${path}/${TAB}`}>Tab</Link>
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </>
    )
  }
}

export const ComponentsWithRouter = withRouter(props => <Components {...props}/>)

// Route path
const ROOT = 'components'
const ALERTS = `${ROOT}/alerts`
const BADGE = `${ROOT}/badge`
const BREADCRUMB = `${ROOT}/breadcrumb`
const BUTTONS = `${ROOT}/buttons`
const CARD = `${ROOT}/card`
const CAROUSEL = `${ROOT}/carousel`
const COLLAPSE = `${ROOT}/collapse`
const DROPDOWN = `${ROOT}/dropdowns`
const FORMS = `${ROOT}/forms`
const INPUT_GROUP = `${ROOT}/input-group`
const JUMBOTRON = `${ROOT}/jumbotron`
const LAYOUT = `${ROOT}/layout`
const LIST_GROUP = `${ROOT}/list-group`
const MEDIA = `${ROOT}/media`
const MODAL = `${ROOT}/modal`
const NAVBAR = `${ROOT}/navbar`
const NAVS = `${ROOT}/navs`
const PAGINATION = `${ROOT}/pagination`
const POPOVERS = `${ROOT}/popovers`
const PROGRESS = `${ROOT}/progress`
const TOOLTIPS = `${ROOT}/tooltips`
const TABLE = `${ROOT}/table`
const TAB = `${ROOT}/tab`
