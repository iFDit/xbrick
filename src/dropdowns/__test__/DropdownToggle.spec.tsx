import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { DropdownToggle } from 'src/dropdowns/DropdownToggle'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('DropdownToggle', () => {
  const child = <p>111</p>
  notCrash(DropdownToggle)
  defaultTag(DropdownToggle, 'button')
  defaultProps(DropdownToggle, { tag: 'button' })
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
})
