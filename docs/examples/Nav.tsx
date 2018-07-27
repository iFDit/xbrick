import * as React from 'react'
import { Nav, NavItem, NavLink } from 'xbrick'

const Example = () => {
  return (
    <>
      <p>list base</p>
      <Nav>
        <NavItem>
          <NavLink href="#">Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
      </Nav>
      <p>link base</p>
      <Nav tag="nav">
        <NavLink href="#">Active</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled>Disabled</NavLink>
      </Nav>
    </>
  )
}

export default Example
