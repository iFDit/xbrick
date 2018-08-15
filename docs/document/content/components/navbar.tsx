import React from 'react'
import { Col, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'xbrick'
import { Navbar, NavbarBrand, NavbarToggler, NavbarCollapse } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/navbar/basic.md'
import brand from 'docs/demo/navbar/brand.md'
import color from 'docs/demo/navbar/color.md'
import expand from 'docs/demo/navbar/expand.md'

// API
import api from 'src/navbar/navbar.md'
import brandapi from 'src/navbar/navbar-brand.md'
import collapseapi from 'src/navbar/navbar-collapse.md'
import togglerapi from 'src/navbar/navbar-toggler.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function NavbarContent() {
  return new Content('Navbar')
  .addNav({ text: 'Overview', anchor: 'overview' })
  .addNav({ text: 'Examples', anchor: 'examples' })
  .addNav({ text: 'Brand', anchor: 'brand' })
  .addNav({ text: 'Color', anchor: 'color' })
  .addNav({ text: 'External content', anchor: 'external-content' })
  .addNav({ text: 'API', anchor: 'api' })
  .addSection({
    title: 'Overview',
    describe: '',
    content: (
      <Col>
        <p>Navbar组件能够创建一个响应式的导航栏，可以展示网站的信息和相关的操作</p>
        <p>使用：</p>
        <ul>
          <li>展示1到3个层次的导航时，使用Navbar。</li>
        </ul>
        <p>不使用：</p>
        <ul>
          <li>当导航层次较多时，考虑使用侧边栏导航。</li>
        </ul>
      </Col>
    ),
  })
  .addSection({
    title: 'Examples',
    describe: '',
    content: (
      <Navbar style={{width: '100%'}}>
        <NavbarBrand href="/">Navbar</NavbarBrand>
        <NavbarToggler/>
        <NavbarCollapse>
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
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink disabled>Disabled</NavLink>
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    ),
    codeText: getCodeFromString(converter.makeHtml(basic)),
  })
  .addSection({
    title: 'Brand',
    describe: '',
    content: (
      <Navbar style={{width: '100%'}}>
        <NavbarBrand href="/">Navbar</NavbarBrand>
      </Navbar>
    ),
    codeText: getCodeFromString(converter.makeHtml(brand)),
  })
  .addSection({
    title: 'Color',
    describe: '',
    content: (
      <>
        <Navbar style={{width: '100%'}} bgColor="primary" className="mb-2" reverse>
          <NavbarBrand href="/">Navbar</NavbarBrand>
          <NavbarToggler/>
          <NavbarCollapse>
            <Nav navbar>
              <NavItem>
                <NavLink href="#" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
        <Navbar style={{width: '100%'}} bgColor="success" className="mb-2" reverse>
          <NavbarBrand href="/">Navbar</NavbarBrand>
          <NavbarCollapse>
            <Nav navbar>
              <NavItem>
                <NavLink href="#" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
        <Navbar style={{width: '100%'}} bgColor="dark" className="mb-2" reverse>
          <NavbarBrand href="/">Navbar</NavbarBrand>
          <NavbarCollapse>
            <Nav navbar>
              <NavItem>
                <NavLink href="#" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
        <Navbar style={{width: '100%'}} bgColor="light" className="mb-2">
          <NavbarBrand href="/">Navbar</NavbarBrand>
          <NavbarCollapse>
            <Nav navbar>
              <NavItem>
                <NavLink href="#" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </>
    ),
    codeText: getCodeFromString(converter.makeHtml(color)),
  })
  .addSection({
    title: 'External content',
    describe: '',
    content: (
      <Navbar style={{width: '100%'}} expand="xl">
        <NavbarBrand href="/">Navbar</NavbarBrand>
        <NavbarToggler/>
        <NavbarCollapse>
          <Nav navbar>
            <NavItem>
              <NavLink href="#" active>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <Dropdown navItem>
              <DropdownToggle navLink>Dropdown</DropdownToggle>
              <DropdownMenu transition={false}>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink disabled>Disabled</NavLink>
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    ),
    codeText: getCodeFromString(converter.makeHtml(expand)),
  })
  .addAPI({
    header: true,
    title: 'Navbar',
    content: getTableFromString(converter.makeHtml(api)),
  })
  .addAPI({
    title: 'NavbarBrand',
    content: getTableFromString(converter.makeHtml(brandapi)),
  })
  .addAPI({
    title: 'NavbarCollapse',
    content: getTableFromString(converter.makeHtml(collapseapi)),
  })
  .addAPI({
    title: 'NavbarToggle',
    content: getTableFromString(converter.makeHtml(togglerapi)),
  })
  .render()
}
