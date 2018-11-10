import React from 'react'
import { mount } from 'enzyme'
import { DropdownMenu, dropdownMenuClass } from 'src/dropdowns/DropdownMenu'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('DropdownMenu', () => {
  const child = <p>111</p>
  notCrash(DropdownMenu)
  defaultTag(DropdownMenu, 'div')
  defaultProps(DropdownMenu, { tag: 'div', right: false, open: false })
  renderChild(DropdownMenu, child, 'p')
  customTag(DropdownMenu, 'section', 'section')
  displayName(DropdownMenu, 'xbrick.DropdownMenu')

  it('should render right align styles by using right props', () => {
    const node = mount(<DropdownMenu right direction="right"/>)
    expect(node.find('div').hasClass('dropdown-menu-right')).toBe(true)
  })

  it('should invoked afterChange after animate is finish', (next) => {
    const afterChange = () => next()
    const node = mount(<DropdownMenu afterChange={afterChange} open={false}/>)
    node.setProps({ open: true })
  })

  describe('dropdownMenuClass', () => {
    it('should create default className', () => {
      expect(dropdownMenuClass()).toBe('xbrick-menu dropdown-menu')
      expect(dropdownMenuClass({className: 'custom'})).toBe('custom xbrick-menu dropdown-menu')
      expect(dropdownMenuClass({className: 'custom', right: true})).toBe('custom xbrick-menu dropdown-menu dropdown-menu-right')
      expect(dropdownMenuClass({className: 'custom', direction: 'right'})).toBe('custom xbrick-menu dropdown-menu')
      expect(dropdownMenuClass({className: 'custom', direction: 'left'})).toBe('custom xbrick-menu dropdown-menu xbrick-menu-left')
      expect(dropdownMenuClass({className: 'custom', direction: 'up'})).toBe('custom xbrick-menu dropdown-menu xbrick-menu-up')
      expect(dropdownMenuClass({className: 'custom', active: true, open: true })).toBe('custom xbrick-menu dropdown-menu')
      expect(dropdownMenuClass({className: 'custom', active: true, open: false })).toBe('custom xbrick-menu dropdown-menu active')
    })
  })
})
