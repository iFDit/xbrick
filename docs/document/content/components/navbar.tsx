import React from 'react'
import { NavbarStyles, NavItemStyles, NavLinkStyles } from 'xbrick'
import { Col, Dropdown, DropdownItem } from 'xbrick'
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, NavbarCollapse } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/navbar/basic.md'
import brand from 'docs/demo/navbar/brand.md'
import color from 'docs/demo/navbar/color.md'
import expand from 'docs/demo/navbar/expand.md'

// STYLES
import style from 'src/navbar/navbar-styles.md'

// API
import api from 'src/navbar/navbar.md'
import brandapi from 'src/navbar/navbar-brand.md'
import collapseapi from 'src/navbar/navbar-collapse.md'
import togglerapi from 'src/navbar/navbar-toggler.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

const noop = (e: MouseEvent) => e.preventDefault()

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
    describe: <p>包含了Nav和Dropdown的导航栏，可以自适应屏幕宽度。</p>,
    content: (
      <Navbar style={{width: '100%'}}>
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <NavbarToggler/>
        <NavbarCollapse>
          <Nav className={NavbarStyles.nav}>
            <NavItem>
              <NavLink href="#" active onClick={noop}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={noop}>Link</NavLink>
            </NavItem>
            <Dropdown className={NavItemStyles.item}>
              <Dropdown.Toggle tag="a" href="#" className={NavLinkStyles.link} onClick={noop}>Dropdown</Dropdown.Toggle>
              <Dropdown.Menu>
                <DropdownItem href="#" onClick={noop}>Action</DropdownItem>
                <DropdownItem href="#" onClick={noop}>Another action</DropdownItem>
                <DropdownItem href="#" onClick={noop}>Something else here</DropdownItem>
              </Dropdown.Menu>
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
    describe: <p>NavbarBrand创建导航栏图标。</p>,
    content: (
      <Navbar style={{width: '100%'}}>
        <NavbarBrand href="#">Navbar</NavbarBrand>
      </Navbar>
    ),
    codeText: getCodeFromString(converter.makeHtml(brand)),
  })
  .addSection({
    title: 'Color',
    describe: <p>通过Navbar的color属性来改变不同的背景颜色。</p>,
    content: (
      <>
        <Navbar style={{width: '100%'}} color="primary" className="mb-2" reverse>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarToggler/>
          <NavbarCollapse>
            <Nav className={NavbarStyles.nav}>
              <NavItem>
                <NavLink href="#" active onClick={noop}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={noop}>Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
        <Navbar style={{width: '100%'}} color="success" className="mb-2" reverse>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarCollapse>
            <Nav className={NavbarStyles.nav}>
              <NavItem>
                <NavLink href="#" active onClick={noop}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={noop}>Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
        <Navbar style={{width: '100%'}} color="dark" className="mb-2" reverse>
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarCollapse>
            <Nav className={NavbarStyles.nav}>
              <NavItem>
                <NavLink href="#" active onClick={noop}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={noop}>Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
        <Navbar style={{width: '100%'}} color="light" className="mb-2">
          <NavbarBrand href="#">Navbar</NavbarBrand>
          <NavbarCollapse>
            <Nav className={NavbarStyles.nav}>
              <NavItem>
                <NavLink href="#" active onClick={noop}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={noop}>Link</NavLink>
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
    describe: <p>通过expand属性，可以自适应屏幕宽度，在宽度不够的时候隐藏导航内容。</p>,
    content: (
      <Navbar style={{width: '100%'}} expand="xl">
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <Navbar.Toggler/>
        <Navbar.Collapse>
          <Nav className={NavbarStyles.nav}>
            <NavItem>
              <NavLink href="#" active onClick={noop}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={noop}>Link</NavLink>
            </NavItem>
            <Dropdown className={NavItemStyles.item}>
              <Dropdown.Toggle tag="a" href="#" className={NavLinkStyles.link} onClick={noop}>Dropdown</Dropdown.Toggle>
              <Dropdown.Menu transition={false}>
                <Dropdown.Item href="#" onClick={noop}>Action</Dropdown.Item>
                <Dropdown.Item href="#" onClick={noop}>Another action</Dropdown.Item>
                <Dropdown.Item href="#" onClick={noop}>Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <NavItem>
              <NavLink disabled>Disabled</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ),
    codeText: getCodeFromString(converter.makeHtml(expand)),
  })
  .addStyles({
    header: true,
    title: 'NavbarStyles',
    content: getTableFromString(converter.makeHtml(style)),
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
