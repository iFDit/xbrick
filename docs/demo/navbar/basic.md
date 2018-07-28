基本使用

````jsx
import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
} from 'xbrick'

ReactDOM.render(
  <Navbar>
    {({ getTogglerProps, getCollapseProps }) => (
      <>
        <NavbarBrand href="/">Navbar</NavbarBrand>
        <NavbarToggler {...getTogglerProps()} />
        <NavbarCollapse {...getCollapseProps()}>
          <Nav navbar>
            <NavItem>
              <NavLink href="#" active>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <Dropdown navItem>
              <DropdownToggle navLink>Dropdown</DropdownToggle>
              <DropdownMenu>
                {() => (
                  <>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                  </>
                )}
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink disabled>Disabled</NavLink>
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </>
    )}
  </Navbar>
, rootNode)
````
