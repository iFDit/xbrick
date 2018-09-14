import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SplitDropdown } from 'src/dropdowns/SplitDropdown'
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
})
