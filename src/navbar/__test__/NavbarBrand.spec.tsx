import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { NavbarBrand, narbarBrandClass } from 'src/navbar/NavbarBrand'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('NavbarBrand', () => {
  const child = <p>111</p>
  notCrash(NavbarBrand)
  defaultTag(NavbarBrand, 'a')
  defaultProps(NavbarBrand, { tag: 'a' })
  renderChild(NavbarBrand, child, 'p')
  customTag(NavbarBrand, 'section', 'section')
  displayName(NavbarBrand, 'xbrick.NavbarBrand')

  it('should render correct className when set different props', () => {
    const node = mount(<NavbarBrand/>)
    expect(node.find('a').hasClass('navbar-brand')).toBe(true)
  })

  describe('narbarBrandClass', () => {
    it('should create default className', () => {
      expect(narbarBrandClass()).toBe('navbar-brand')
      expect(narbarBrandClass({className: 'custom'})).toBe('custom navbar-brand')
    })
  })
})
