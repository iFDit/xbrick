import * as React from 'react'
import { Nav, NavItem, NavLink, Collapse } from 'xbrick'

export class GettingStarted extends React.Component {
  public state = { open: false }
  private toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render () {
    const { open } = this.state
    return (
      <>
        <NavLink href="#" active={open} onClick={() => this.toggle()}>Getting Started</NavLink>
        <Collapse open={open}>
          {() => (
            <Nav vertical>
              <NavItem><NavLink href="#">Install</NavLink></NavItem>
              <NavItem><NavLink href="#">Usage</NavLink></NavItem>
            </Nav>
          )}
        </Collapse>
      </>
    )
  }
}
