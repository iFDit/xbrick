import * as React from 'react'
import { Nav, NavItem, NavLink } from 'xbrick'

const Sidebar = () => {
  return (
    <div className="doc-sidebar" >
      <Nav vertical>
        <NavItem className="sidebar-item"><NavLink href="#">Getting Started</NavLink></NavItem>
        <NavItem className="sidebar-item">
          <NavLink href="#">Components</NavLink>
          <Nav vertical>
            <NavItem><NavLink href="#">Alerts</NavLink></NavItem>
            <NavItem><NavLink href="#">Badge</NavLink></NavItem>
            <NavItem><NavLink href="#">Breadcrumb</NavLink></NavItem>
            <NavItem><NavLink href="#">Buttons</NavLink></NavItem>
            <NavItem><NavLink href="#">Card</NavLink></NavItem>
            <NavItem><NavLink href="#">Carousel</NavLink></NavItem>
            <NavItem><NavLink href="#">Collapse</NavLink></NavItem>
            <NavItem><NavLink href="#">Dropdowns</NavLink></NavItem>
            <NavItem><NavLink href="#">Forms</NavLink></NavItem>
            <NavItem><NavLink href="#">Input group</NavLink></NavItem>
            <NavItem><NavLink href="#">Jumbotron</NavLink></NavItem>
            <NavItem><NavLink href="#">Layout</NavLink></NavItem>
            <NavItem><NavLink href="#">List group</NavLink></NavItem>
            <NavItem><NavLink href="#">Media</NavLink></NavItem>
            <NavItem><NavLink href="#">Modal</NavLink></NavItem>
            <NavItem><NavLink href="#">Navbar</NavLink></NavItem>
            <NavItem><NavLink href="#">Navs</NavLink></NavItem>
            <NavItem><NavLink href="#">Navs</NavLink></NavItem>
            <NavItem><NavLink href="#">Navs</NavLink></NavItem>
            <NavItem><NavLink href="#">Navs</NavLink></NavItem>
            <NavItem><NavLink href="#">Navs</NavLink></NavItem>
            <NavItem><NavLink href="#">Navs</NavLink></NavItem>
            <NavItem><NavLink href="#">Navs</NavLink></NavItem>
            <NavItem><NavLink href="#">Navs</NavLink></NavItem>
            <NavItem><NavLink href="#">Navs</NavLink></NavItem>
            <NavItem><NavLink href="#">Navs</NavLink></NavItem>
          </Nav>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Sidebar
