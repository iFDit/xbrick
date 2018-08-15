import React from 'react'
import { Col } from 'xbrick'
import { Nav, NavItem, NavLink } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/nav/basic.md'
import justify from 'docs/demo/nav/justify.md'
import vertical from 'docs/demo/nav/vertical.md'

// API
import api from 'src/navs/nav.md'
import linkapi from 'src/navs/nav-link.md'
import itemapi from 'src/navs/nav-item.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function NavsContent() {
  return new Content('Navs')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Horizontal alignment', anchor: 'horizontal-alignment' })
    .addNav({ text: 'Vertical', anchor: 'vertical' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Nav组件可用于网站的导航，一般用在Navbar组件中，或者自定义侧边栏导航。</p>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <>
          <Nav style={{width: '100%'}}>
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
          <Nav tag="nav" style={{width: '100%'}}>
            <NavLink href="#">Active</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink disabled href="#">Disabled</NavLink>
          </Nav>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Horizontal alignment',
      describe: '',
      content: (
        <>
          <Nav tag="nav" justify="center" style={{width: '100%'}}>
            <NavLink href="#">Active</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink disabled href="#">Disabled</NavLink>
          </Nav>
          <Nav tag="nav" justify="end" style={{width: '100%'}}>
            <NavLink href="#">Active</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink disabled href="#">Disabled</NavLink>
          </Nav>
          <Nav tag="nav" justify="around" style={{width: '100%'}}>
            <NavLink href="#">Active</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink href="#">Link</NavLink>
            <NavLink disabled href="#">Disabled</NavLink>
          </Nav>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(justify)),
    })
    .addSection({
      title: 'Vertical',
      describe: '',
      content: (
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
      ),
      codeText: getCodeFromString(converter.makeHtml(vertical)),
    })
    .addAPI({
      header: true,
      title: 'Nav',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'NavItem',
      content: getTableFromString(converter.makeHtml(itemapi)),
    })
    .addAPI({
      title: 'NavLink',
      content: getTableFromString(converter.makeHtml(linkapi)),
    })
    .render()
}
