import * as React from 'react'
import { Nav, NavItem, NavLink } from 'xbrick'

const Example = () => {
  return (
    <Nav vertical>
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
  )
}

export default Example
