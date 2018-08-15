导航项布局方式

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Nav, NavItem, NavLink } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Fragment>
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
    <Nav tag="nav" justify="end">
      <NavLink href="#">Active</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink disabled href="#">Disabled</NavLink>
    </Nav>
    <Nav tag="nav" justify="around">
      <NavLink href="#">Active</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink disabled href="#">Disabled</NavLink>
    </Nav>
  </Fragment>
, document.getElementById('root'))
````
