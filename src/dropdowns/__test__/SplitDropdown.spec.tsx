import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SplitDropdown, splitDropdownClass } from 'src/dropdowns/SplitDropdown'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('SplitDropdown', () => {
  const child = <p>111</p>
  notCrash(SplitDropdown)
  defaultTag(SplitDropdown, 'div')
  defaultProps(SplitDropdown, { tag: 'div' })
  renderChild(SplitDropdown, child, 'p')
  customTag(SplitDropdown, 'section', 'section')
  displayName(SplitDropdown, 'xbrick.SplitDropdown')

  it('should render split styles dropdown', () => {
    const node = mount(<SplitDropdown/>)
    expect(node.find('div').hasClass('btn-group')).toBe(true)
  })

  describe('splitDropdownClass', () => {
    it('should create default className', () => {
      expect(splitDropdownClass()).toBe('btn-group')
      expect(splitDropdownClass({className: 'custom'})).toBe('custom btn-group')
      expect(splitDropdownClass({className: 'custom', direction: 'up'})).toBe('custom btn-group dropup')
      expect(splitDropdownClass({className: 'custom', direction: 'left'})).toBe('custom btn-group dropleft')
      expect(splitDropdownClass({className: 'custom', direction: 'right'})).toBe('custom btn-group dropright')
    })
  })
})
