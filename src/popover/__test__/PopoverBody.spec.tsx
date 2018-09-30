import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { PopoverBody, popoverBodyClass } from 'src/popover/PopoverBody'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('PopoverBody', () => {
  const child = <p>111</p>
  notCrash(PopoverBody)
  defaultTag(PopoverBody, 'div')
  defaultProps(PopoverBody, { tag: 'div' })
  renderChild(PopoverBody, child, 'p')
  customTag(PopoverBody, 'section', 'section')
  displayName(PopoverBody, 'xbrick.PopoverBody')

  it('should trigger fade animation by using open props', next => {
    const node = mount(<PopoverBody open={true}/>)
    node.setProps({open: false, afterStateChange: () => next()})
  })

  it('should render correct className when set different props', () => {
    const node = mount(<PopoverBody />)
    expect(node.find('div').hasClass('popover-body')).toBe(true)
    expect(node.find('div').hasClass('xbrick-popover-body')).toBe(true)
  })

  describe('popoverBodyClass', () => {
    it('should create default className', () => {
      expect(popoverBodyClass()).toBe('popover-body xbrick-popover-body')
      expect(popoverBodyClass({className: 'custom'})).toBe('custom popover-body xbrick-popover-body')
    })
  })
})
