import React from 'react'
import { mount } from 'enzyme'
import { Container, containerClass } from 'src/layout/Container'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('Container', () => {
  const child = <p>111</p>
  notCrash(Container)
  defaultTag(Container, 'div')
  defaultProps(Container, { tag: 'div', fluid: true })
  renderChild(Container, child, 'p')
  customTag(Container, 'section', 'section')
  displayName(Container, 'xbrick.Container')

  it('should render correct className when set different props', () => {
    const node = mount(<Container/>)
    expect(node.find('div').hasClass('container')).toBe(true)
    node.setProps({ fluid: true })
    expect(node.find('div').hasClass('container-fluid')).toBe(true)
    expect(node.find('div').hasClass('container')).toBe(false)
  })

  describe('containerClass', () => {
    it('should create default className', () => {
      expect(containerClass()).toBe('container')
      expect(containerClass({className: 'custom'})).toBe('custom container')
      expect(containerClass({className: 'custom', fluid: true})).toBe('custom container-fluid')
    })
  })
})
