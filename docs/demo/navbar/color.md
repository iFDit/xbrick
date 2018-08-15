
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Navbar, NavbarBrand, NavbarCollapse, Nav, NavItem, NavLink } from 'xbrick'

ReactDOM.render(
  <Fragment>
    <Navbar bgColor="primary" className="mb-2" reverse>
      <NavbarBrand href="/">Navbar</NavbarBrand>
      <NavbarToggler/>
      <NavbarCollapse>
        <Nav navbar>
          <NavItem>
            <NavLink href="#" active>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
      </NavbarCollapse>
    </Navbar>
    <Navbar bgColor="success" className="mb-2" reverse>
      <NavbarBrand href="/">Navbar</NavbarBrand>
      <NavbarCollapse>
        <Nav navbar>
          <NavItem>
            <NavLink href="#" active>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
      </NavbarCollapse>
    </Navbar>
    <Navbar bgColor="dark" className="mb-2" reverse>
      <NavbarBrand href="/">Navbar</NavbarBrand>
      <NavbarCollapse>
        <Nav navbar>
          <NavItem>
            <NavLink href="#" active>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
      </NavbarCollapse>
    </Navbar>
    <Navbar bgColor="light" className="mb-2">
      <NavbarBrand href="/">Navbar</NavbarBrand>
      <NavbarCollapse>
        <Nav navbar>
          <NavItem>
            <NavLink href="#" active>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  </Fragment>
, document.getElementById('root'))
````
