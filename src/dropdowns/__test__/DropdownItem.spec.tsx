import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { DropdownItem } from 'src/dropdowns/DropdownItem'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

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
})
