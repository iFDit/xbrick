import React from 'react'
import { mount } from 'enzyme'
import { DropdownToggle, dropdownToggleClass } from 'src/dropdowns/DropdownToggle'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('DropdownToggle', () => {
  const child = <p>111</p>
  notCrash(DropdownToggle)
  defaultTag(DropdownToggle, 'button')
  defaultProps(DropdownToggle, { tag: 'button', split: false, button: false })
  renderChild(DropdownToggle, child, 'p')
  customTag(DropdownToggle, 'section', 'section')
  displayName(DropdownToggle, 'xbrick.DropdownToggle')

  it('should render as Button by using button props', () => {
    const node = mount(<DropdownToggle button color="secondary"/>)
    expect(node.find('button').hasClass('btn-secondary')).toBe(true)
  })

  it('should split styles toggler by using split props', () => {
    const node = mount(<DropdownToggle split/>)
    expect(node.find('button').hasClass('dropdown-toggle-split')).toBe(true)
  })

  describe('dropdownToggleClass', () => {
    it('should create default className', () => {
      expect(dropdownToggleClass()).toBe('dropdown-toggle')
      expect(dropdownToggleClass({className: 'custom'})).toBe('custom dropdown-toggle')
      expect(dropdownToggleClass({className: 'custom', split: true})).toBe('custom dropdown-toggle dropdown-toggle-split')
    })
  })
})
