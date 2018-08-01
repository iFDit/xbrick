import * as React from 'react'
import { ComponentsWithRouter } from 'docs/document/sidebar/components'
import { GettingStartedWithRouter } from 'docs/document/sidebar/gettingStarted'
import { Nav, NavItem } from 'xbrick'

export class Sidebar extends React.Component {
  render () {
    return (
      <div className="doc-sidebar" >
        <Nav vertical>
          <NavItem className="sidebar-item"><GettingStartedWithRouter/></NavItem>
          <NavItem className="sidebar-item"><ComponentsWithRouter/></NavItem>
        </Nav>
      </div>
    )
  }
}
