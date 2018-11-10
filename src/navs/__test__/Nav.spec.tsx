import React from 'react'
import { mount } from 'enzyme'
import { Nav, navClass } from 'src/navs/Nav'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('Nav', () => {
  const child = <p>111</p>
  notCrash(Nav)
  defaultTag(Nav, 'ul')
  defaultProps(Nav, { tag: 'ul', tab: false, justify: 'start', vertical: false })
  renderChild(Nav, child, 'p')
  customTag(Nav, 'section', 'section')
  displayName(Nav, 'xbrick.Nav')

  it('should render correct className when set different props', () => {
    const node = mount(<Nav/>)
    expect(node.find('ul').hasClass('nav')).toBe(true)
    node.setProps({ vertical: true })
    expect(node.find('ul.nav').hasClass('flex-column')).toBe(true)
    node.setProps({ justify: 'center' })
    expect(node.find('ul.nav').hasClass('justify-content-center'))
  })

  describe('navClass', () => {
    it('should create default className', () => {
      expect(navClass()).toBe('nav')
      expect(navClass({className: 'custom'})).toBe('custom nav')
      expect(navClass({className: 'custom', tab: true})).toBe('custom nav nav-tabs')
      expect(navClass({className: 'custom', vertical: true})).toBe('custom nav flex-column')
      expect(navClass({className: 'custom', justify: 'start'})).toBe('custom nav')
      expect(navClass({className: 'custom', justify: 'center'})).toBe('custom nav justify-content-center')
      expect(navClass({className: 'custom', justify: 'end'})).toBe('custom nav justify-content-end')
    })
  })
})
