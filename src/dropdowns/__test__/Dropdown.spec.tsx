import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Dropdown } from 'src/dropdowns/Dropdown'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Dropdown', () => {
  const child = <p>111</p>
  notCrash(Dropdown)
  defaultTag(Dropdown, 'div')
  defaultProps(Dropdown, { tag: 'div' })
  renderChild(Dropdown, child, 'p')
  customTag(Dropdown, 'section', 'section')
  displayName(Dropdown, 'xbrick.Dropdown')

  it('should set difference direction by using direction props', () => {
    const node = mount(<Dropdown direction="up"/>)
    expect(node.find('div').hasClass('dropup')).toBe(true)
    node.setProps({ direction: 'right' })
    expect(node.find('div').hasClass('dropright')).toBe(true)
    node.setProps({ direction: 'left' })
    expect(node.find('div').hasClass('dropleft')).toBe(true)
  })
})
