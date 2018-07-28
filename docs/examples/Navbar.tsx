import * as React from 'react'
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

const Example = () => {
  let toggle: any
  let show: boolean = false
  return (
    <Navbar>
      {({ getTogglerProps, getCollapseProps }) => (
        <>
          <NavbarBrand href="/">Navbar</NavbarBrand>
          <NavbarToggler {...getTogglerProps()} />
          <NavbarCollapse {...getCollapseProps()} style={{paddingTop: 10}}>
            <Nav navbar>
              <NavItem>
                <NavLink href="#" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <Dropdown navItem>
                <DropdownToggle navLink bstype="light" onClick={() => {
                  toggle()
                  show = !show
                }}>Dropdown</DropdownToggle>
                <DropdownMenu>
                  {({ slidedown, slideup }) => {
                    toggle = show ? slideup : slidedown
                    return (
                      <>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </>
                  )}}
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
  )
}

export default Example
