基本使用

````jsx
import { Nav, NavItem, NavLink } from 'xbrick'

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
, rootNode)
````
