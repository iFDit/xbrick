import React from 'react'
import { mount } from 'enzyme'
import { NavbarCollapse, navbarCollapseClass } from 'src/navbar/NavbarCollapse'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('NavbarCollapse', () => {
  const child = <p>111</p>
  notCrash(NavbarCollapse)
  defaultTag(NavbarCollapse, 'div')
  defaultProps(NavbarCollapse, { tag: 'div' })
  renderChild(NavbarCollapse, child, 'p')
  customTag(NavbarCollapse, 'section', 'section')
  displayName(NavbarCollapse, 'xbrick.NavbarCollapse')

  it('should render correct className when set different props', () => {
    const node = mount(<NavbarCollapse/>)
    expect(node.find('div').hasClass('navbar-collapse')).toBe(true)
  })

  describe('navbarCollapseClass', () => {
    it('should create default className', () => {
      expect(navbarCollapseClass()).toBe('navbar-collapse')
      expect(navbarCollapseClass({className: 'custom'})).toBe('custom navbar-collapse')
    })
  })
})
