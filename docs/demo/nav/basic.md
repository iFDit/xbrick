基本使用

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Nav, NavItem, NavLink } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
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
  <Nav tag="nav" style={{width: '100%'}}>
    <NavLink href="#">Active</NavLink>
    <NavLink href="#">Link</NavLink>
    <NavLink href="#">Link</NavLink>
    <NavLink disabled>Disabled</NavLink>
  </Nav>
, document.getElementById('root'))
````
