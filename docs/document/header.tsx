import * as React from 'react'
const logo = require('src/logo.svg')
import { Form, Input, Button } from 'xbrick'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggler, Nav, NavItem, NavLink } from 'xbrick'

const Header = () => {
  return (
    <Navbar justify="between" sticky>
      {({ getTogglerProps, getCollapseProps }) => (
        <>
          <NavbarBrand href="/"><img src={logo} width="32" height="32" /><span className="h5">xbrick</span></NavbarBrand>
          <NavbarToggler {...getTogglerProps()} />
          <NavbarCollapse {...getCollapseProps()}>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Documentation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">GitHub</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
          <Form inline>
            <Input placeholder="Search" className="mr-sm-2" />
            <Button outline>Search</Button>
          </Form>
        </>
      )}
    </Navbar>
  )
}

export default Header
