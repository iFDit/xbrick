垂直展示

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Nav, NavItem, NavLink } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
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
      <NavLink disabled href="#">Disabled</NavLink>
    </NavItem>
  </Nav>
, document.getElementById('root'))
````
