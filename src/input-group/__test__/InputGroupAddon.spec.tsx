import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { InputGroupAddon, inputGroupAddonClass } from 'src/input-group/InputGroupAddon'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('InputGroupAddon', () => {
  const child = <p>111</p>
  notCrash(InputGroupAddon)
  defaultTag(InputGroupAddon, 'div')
  defaultProps(InputGroupAddon, { tag: 'div', position: 'prepend' })
  renderChild(InputGroupAddon, child, 'p')
  customTag(InputGroupAddon, 'section', 'section')
  displayName(InputGroupAddon, 'xbrick.InputGroupAddon')

  it('should render prepend addon', () => {
    const node = mount(<InputGroupAddon/>)
    expect(node.find('div').hasClass('input-group-prepend')).toBe(true)
  })

  it('should render append addon', () => {
    const node = mount(<InputGroupAddon position="append"/>)
    expect(node.find('div').hasClass('input-group-append')).toBe(true)
  })

  describe('inputGroupAddonClass', () => {
    it('should create default className', () => {
      expect(inputGroupAddonClass()).toBe('input-group-prepend')
      expect(inputGroupAddonClass({className: 'custom'})).toBe('custom input-group-prepend')
      expect(inputGroupAddonClass({className: 'custom', position: 'append'})).toBe('custom input-group-append')
    })
  })
})
