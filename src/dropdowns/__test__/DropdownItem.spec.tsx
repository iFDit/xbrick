import React from 'react'
import { mount } from 'enzyme'
import { DropdownItem, dropdownItemClass } from 'src/dropdowns/DropdownItem'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('DropdownItem', () => {
  const child = <p>111</p>
  notCrash(DropdownItem)
  defaultTag(DropdownItem, 'a')
  defaultProps(DropdownItem, { tag: 'a', header: false, divider: false, active: false, disabled: false })
  renderChild(DropdownItem, child, 'p')
  customTag(DropdownItem, 'section', 'section')
  displayName(DropdownItem, 'xbrick.DropdownItem')

  it('should render as header by using header props', () => {
    const node = mount(<DropdownItem header/>)
    expect(node.find('h6').hasClass('dropdown-header')).toBe(true)
  })

  it('should render as divider by using divider props', () => {
    const node = mount(<DropdownItem divider/>)
    expect(node.find('div').hasClass('dropdown-divider')).toBe(true)
  })

  it('should be active by using active props', () => {
    const node = mount(<DropdownItem active/>)
    expect(node.find('a').hasClass('active')).toBe(true)
  })

  it('should be disabled by using disabled props', () => {
    const node = mount(<DropdownItem disabled/>)
    expect(node.find('a').hasClass('disabled')).toBe(true)
  })

  describe('dropdownItemClass', () => {
    it('should create default className', () => {
      expect(dropdownItemClass()).toBe('dropdown-item')
      expect(dropdownItemClass({className: 'custom'})).toBe('custom dropdown-item')
      expect(dropdownItemClass({className: 'custom', header: true})).toBe('custom dropdown-header')
      expect(dropdownItemClass({className: 'custom', divider: true})).toBe('custom dropdown-divider')
      expect(dropdownItemClass({className: 'custom', active: true})).toBe('custom dropdown-item active')
      expect(dropdownItemClass({className: 'custom', disabled: true})).toBe('custom dropdown-item disabled')
    })
  })
})
