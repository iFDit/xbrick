import React from 'react'
import { mount } from 'enzyme'
import { NavbarToggler, navbarTogglerClass } from 'src/navbar/NavbarToggler'
import { notCrash, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('NavbarToggler', () => {
  notCrash(NavbarToggler)
  defaultTag(NavbarToggler, 'button')
  defaultProps(NavbarToggler, { tag: 'button' })
  customTag(NavbarToggler, 'section', 'section')
  displayName(NavbarToggler, 'xbrick.NavbarToggler')

  it('should render correct className when set different props', () => {
    const node = mount(<NavbarToggler/>)
    expect(node.find('button').hasClass('navbar-toggler')).toBe(true)
    expect(node.find('span').hasClass('navbar-toggler-icon')).toBe(true)
  })

  describe('navbarTogglerClass', () => {
    it('should create default className', () => {
      expect(navbarTogglerClass()).toBe('navbar-toggler')
      expect(navbarTogglerClass({className: 'custom'})).toBe('custom navbar-toggler')
    })
  })
})
