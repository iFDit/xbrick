
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Navbar, NavbarBrand, NavbarCollapse, Nav, NavItem, NavLink, NavbarStyles } from 'xbrick'

ReactDOM.render(
  <Fragment>
    <Navbar color="primary" className="mb-2" reverse>
      <NavbarBrand href="/">Navbar</NavbarBrand>
      <Navbar.Toggler/>
      <Navbar.Collapse>
        <Nav className={NavbarStyles.nav}>
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
      </Navbar.Collapse>
    </Navbar>
    <Navbar color="success" className="mb-2" reverse>
      <NavbarBrand href="/">Navbar</NavbarBrand>
      <Navbar.Collapse>
        <Nav className={NavbarStyles.nav}>
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
      </Navbar.Collapse>
    </Navbar>
    <Navbar color="dark" className="mb-2" reverse>
      <NavbarBrand href="/">Navbar</NavbarBrand>
      <Navbar.Collapse>
        <Nav className={NavbarStyles.nav}>
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
      </Navbar.Collapse>
    </Navbar>
    <Navbar color="light" className="mb-2">
      <NavbarBrand href="/">Navbar</NavbarBrand>
      <Navbar.Collapse>
        <Nav className={NavbarStyles.nav}>
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
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
, document.getElementById('root'))
````
