import * as React from 'react'
import { get } from 'lodash'
import { Nav, NavItem, NavLink, Collapse } from 'xbrick'
import { Link, withRouter } from 'react-router-dom'
// @ts-ignore
// fixed typescript declaration.
// https://github.com/Microsoft/TypeScript/issues/9944
import * as rr from 'react-router'

const ROOT = 'getting-started'
const INSTALL = `${ROOT}/install`
const USAGE = `${ROOT}/usage`

export class GettingStarted extends React.Component<any> {
  static getDerivedStateFromProps(props: any, state: any) {
    // tslint:disable-next-line
    const open = !!~get(props, 'location.pathname', '').indexOf(ROOT)
    if (get(props, 'location.pathname') !== state.pathname) {
      return { ...state, open, pathname: get(props, 'location.pathname') }
    }
    return state
  }

  public state: any = {
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
    const { match = {} } = this.props
    const { open } = this.state
    const path = match.path
    const inRoot = this.itemActive(ROOT)
    
    return (
      <>
        <NavLink href="#" active={inRoot} onClick={() => this.toggle()} nowrap={!inRoot}>
          {inRoot ? 'Getting Started' : <Link to={`${path}/${ROOT}`} onClick={() => this.toggle()}>Getting Started</Link>}
        </NavLink>
        <Collapse open={open}>
          {() => (
            <Nav vertical>
              <NavItem>
                <NavLink nowrap active={this.itemActive(`${path}/${INSTALL}`)}>
                  <Link to={`${path}/${INSTALL}`}>Install</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink nowrap active={this.itemActive(`${path}/${USAGE}`)}>
                  <Link to={`${path}/${USAGE}`}>Usage</Link>
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </>
    )
  }
}

export const GettingStartedWithRouter = withRouter(props => <GettingStarted {...props}/>)