import * as React from 'react'
import { Nav, NavItem, NavLink, Collapse } from 'xbrick'

export class Components extends React.Component {
  public state = { open: false }
  private toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render () {
    const { open } = this.state
    return (
      <>
        <NavLink href="#" active={open} onClick={() => this.toggle()}>Components</NavLink>
          <Collapse open={open}>
            {() => (
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
                <NavItem><NavLink href="#">Pagination</NavLink></NavItem>
                <NavItem><NavLink href="#">Popovers</NavLink></NavItem>
                <NavItem><NavLink href="#">Progress</NavLink></NavItem>
                <NavItem><NavLink href="#">Scrollspy</NavLink></NavItem>
                <NavItem><NavLink href="#">Tooltips</NavLink></NavItem>
                <NavItem><NavLink href="#">Table</NavLink></NavItem>
                <NavItem><NavLink href="#">Tab</NavLink></NavItem>
              </Nav>
            )}
        </Collapse>
      </>
    )
  }
}
