
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Dropdown, NavbarStyles, NavItemStyles, NavLinkStyles } from 'xbrick'

ReactDOM.render(
  <Navbar expand="xl">
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
        <Dropdown className={NavItemStyles.item}>
          <Dropdown.Toggle tag="a" href="#" className={NavLinkStyles.link}>Dropdown</Dropdown.Toggle>
          <Dropdown.Menu transition={false}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
, document.getElementById('root'))
````
