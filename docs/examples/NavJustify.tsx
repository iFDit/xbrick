import * as React from 'react'
import { Nav, NavItem, NavLink } from 'xbrick'

const Example = () => {
  return (
    <>
      <p>start</p>
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
      <p>center</p>
      <Nav justify="center">
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
      <p>end</p>
      <Nav justify="end">
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
      <p>around</p>
      <Nav justify="around">
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
      <p>between</p>
      <Nav justify="between">
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
    </>
  )
}

export default Example
