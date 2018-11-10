import React from 'react'
import { mount } from 'enzyme'
import { NavLink, navLinkClass } from 'src/navs/NavLink'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('NavLink', () => {
  const child = <p>111</p>
  notCrash(NavLink)
  defaultTag(NavLink, 'a')
  defaultProps(NavLink, { tag: 'a', render: true, active: false, disabled: false })
  renderChild(NavLink, child, 'p')
  customTag(NavLink, 'section', 'section')
  displayName(NavLink, 'xbrick.NavLink')

  it('should render correct className when set different props', () => {
    const node = mount(<NavLink/>)
    expect(node.find('a').hasClass('nav-link')).toBe(true)
    node.setProps({ active: true })
    expect(node.find('a.nav-link').hasClass('active')).toBe(true)
    node.setProps({ active: false, disabled: true })
    expect(node.find('a.nav-link').hasClass('disabled')).toBe(true)
  })

  it('should render children with navlink className when render is false', () => {
    const node = mount(<NavLink render={false}><p>111</p></NavLink>)
    expect(node.find('p').hasClass('nav-link')).toBe(true)
  })

  describe('navLinkClass', () => {
    it('should create default className', () => {
      expect(navLinkClass()).toBe('nav-link')
      expect(navLinkClass({className: 'custom'})).toBe('custom nav-link')
      expect(navLinkClass({className: 'custom', active: true})).toBe('custom nav-link active')
      expect(navLinkClass({className: 'custom', disabled: true})).toBe('custom nav-link disabled')
    })
  })
})
