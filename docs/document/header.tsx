import * as React from 'react'
const logo = require('src/logo.svg')
import { Form, Input, Button } from 'xbrick'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggler, Nav, NavItem, NavLink } from 'xbrick'
import { Link, withRouter } from 'react-router-dom'

export const Header = withRouter(props => {
  const { location = {} } = props
  const { pathname } = location as any
  const homeActive = pathname.indexOf('/home') > -1
  const componentsActive = pathname.indexOf('/documents') > -1
  return (
    <Navbar justify="between" sticky expand="sm">
      {({ getTogglerProps, getCollapseProps }) => (
        <>
          <NavbarBrand href="/"><img src={logo} width="32" height="32" /><span className="h5">xbrick</span></NavbarBrand>
          <NavbarToggler {...getTogglerProps()} />
          <NavbarCollapse {...getCollapseProps()}>
            <Nav navbar>
              <NavItem>
                <NavLink nowrap={!homeActive} active={homeActive} href="#">
                  {homeActive ? 'Home' : <Link to="/home">Home</Link>}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink nowrap={!componentsActive} active={componentsActive} href="#">
                  {componentsActive ? 'Documentation' : <Link to="/documents">Documentation</Link>}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/iFDit/xbrick">GitHub</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
          <Form inline>
            <Input placeholder="Search" className="mr-sm-2" />
          </Form>
        </>
      )}
    </Navbar>
  )
})
