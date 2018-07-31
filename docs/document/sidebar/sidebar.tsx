import * as React from 'react'
import { Components } from 'docs/document/sidebar/components'
import { GettingStarted } from 'docs/document/sidebar/gettingStarted'
import { Nav, NavItem } from 'xbrick'

export class Sidebar extends React.Component {
  render () {
    return (
      <div className="doc-sidebar" >
        <Nav vertical>
          <NavItem className="sidebar-item"><GettingStarted/></NavItem>
          <NavItem className="sidebar-item"><Components/></NavItem>
        </Nav>
      </div>
    )
  }
}
