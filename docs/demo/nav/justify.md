导航项布局方式

````jsx
import { Nav, NavItem, NavLink } from 'xbrick'

ReactDOM.render(
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
, rootNode)
````
