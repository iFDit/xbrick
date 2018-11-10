import React from 'react'
import { mount } from 'enzyme'
import { PopoverHeader, popoverHeaderClass } from 'src/popover/PopoverHeader'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('PopoverHeader', () => {
  const child = <p>111</p>
  notCrash(PopoverHeader)
  defaultTag(PopoverHeader, 'h3')
  defaultProps(PopoverHeader, { tag: 'h3' })
  renderChild(PopoverHeader, child, 'p')
  customTag(PopoverHeader, 'section', 'section')
  displayName(PopoverHeader, 'xbrick.PopoverHeader')

  it('should render correct className when set different props', () => {
    const node = mount(<PopoverHeader />)
    expect(node.find('h3').hasClass('popover-header')).toBe(true)
  })

  describe('popoverHeaderClass', () => {
    it('should create default className', () => {
      expect(popoverHeaderClass()).toBe('popover-header')
      expect(popoverHeaderClass({className: 'custom'})).toBe('custom popover-header')
    })
  })
})
