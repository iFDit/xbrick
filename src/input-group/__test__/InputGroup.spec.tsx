import React from 'react'
import { mount } from 'enzyme'
import { InputGroup, inputGroupClass } from 'src/input-group/InputGroup'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('InputGroup', () => {
  const child = <p>111</p>
  notCrash(InputGroup)
  defaultTag(InputGroup, 'div')
  defaultProps(InputGroup, { tag: 'div', size: 'middle' })
  renderChild(InputGroup, child, 'p')
  customTag(InputGroup, 'section', 'section')
  displayName(InputGroup, 'xbrick.InputGroup')

  it('should render large size', () => {
    const node = mount(<InputGroup size="large"/>)
    expect(node.find('div').hasClass('input-group-lg')).toBe(true)
  })

  it('should render small size', () => {
    const node = mount(<InputGroup size="small"/>)
    expect(node.find('div').hasClass('input-group-sm')).toBe(true)
  })

  describe('inputGroupClass', () => {
    it('should create default className', () => {
      expect(inputGroupClass()).toBe('input-group')
      expect(inputGroupClass({className: 'custom'})).toBe('custom input-group')
      expect(inputGroupClass({className: 'custom', size: 'small'})).toBe('custom input-group input-group-sm')
      expect(inputGroupClass({className: 'custom', size: 'large'})).toBe('custom input-group input-group-lg')
    })
  })
})
