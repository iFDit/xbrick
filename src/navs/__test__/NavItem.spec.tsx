import React from 'react'
import { mount } from 'enzyme'
import { NavItem, navItemClass } from 'src/navs/NavItem'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('NavItem', () => {
  const child = <p>111</p>
  notCrash(NavItem)
  defaultTag(NavItem, 'li')
  defaultProps(NavItem, { tag: 'li' })
  renderChild(NavItem, child, 'p')
  customTag(NavItem, 'section', 'section')
  displayName(NavItem, 'xbrick.NavItem')

  it('should render correct className when set different props', () => {
    const node = mount(<NavItem />)
    expect(node.find('li').hasClass('nav-item')).toBe(true)
  })

  describe('navItemClass', () => {
    it('should create default className', () => {
      expect(navItemClass()).toBe('nav-item')
      expect(navItemClass({className: 'custom'})).toBe('custom nav-item')
    })
  })
})
