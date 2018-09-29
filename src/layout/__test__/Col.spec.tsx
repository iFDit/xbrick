import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Col, colClass } from 'src/layout/Col'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Col', () => {
  const child = <p>111</p>
  notCrash(Col)
  defaultTag(Col, 'div')
  defaultProps(Col, { tag: 'div', xs: 0, render: true })
  renderChild(Col, child, 'p')
  customTag(Col, 'section', 'section')
  displayName(Col, 'xbrick.Col')

  it('should render correct className when set different props', () => {
    const node = mount(<Col/>)
    expect(node.find('div').hasClass('col')).toBe(true)
    node.setProps({ sm: { col: 'auto' } })
    expect(node.find('div').hasClass('col-sm-auto')).toBe(true)
    node.setProps({ sm: { col: 1, align: 'start' } })
    expect(node.find('div.col-sm-1').hasClass('align-self-sm-start')).toBe(true)
    node.setProps({ sm: { order: 1 }})
    expect(node.find('div').hasClass('order-sm-1')).toBe(true)
    node.setProps({ sm: { offset: 1 }})
    expect(node.find('div').hasClass('offset-sm-1')).toBe(true)
    node.setProps({ xs: { col: 'auto' } })
    expect(node.find('div').hasClass('col-auto')).toBe(true)
    node.setProps({ xs: { col: 1, align: 'start' } })
    expect(node.find('div.col-1').hasClass('align-self-start')).toBe(true)
    node.setProps({ xs: { order: 1 }})
    expect(node.find('div').hasClass('order-1')).toBe(true)
    node.setProps({ xs: { offset: 1 }})
    expect(node.find('div').hasClass('offset-1')).toBe(true)
  })

  it('should not render wrap component and pass down layout className', () => {
    const node = mount(<Col render={false}><p>11</p></Col>)
    expect(node.find('p').hasClass('col')).toBe(true)
  })

  describe('colClass', () => {
    it('should create default className', () => {
      expect(colClass()).toBe('')
      expect(colClass({className: 'custom'})).toBe('custom')
      expect(colClass({className: 'custom', xs: '0'})).toBe('custom col')
      expect(colClass({className: 'custom', xs: '1'})).toBe('custom col-1')
      expect(colClass({className: 'custom', sm: true})).toBe('custom col-sm')
      expect(colClass({className: 'custom', sm: 0})).toBe('custom col-sm')
      expect(colClass({className: 'custom', md: 2})).toBe('custom col-md-2')
      expect(colClass({className: 'custom', lg: 3})).toBe('custom col-lg-3')
      expect(colClass({className: 'custom', xl: 4})).toBe('custom col-xl-4')
      expect(colClass({className: 'custom', xl: 5})).toBe('custom col-xl-5')
      expect(colClass({className: 'custom', xs: {offset: 1, col: 0}})).toBe('custom offset-1 col')
      expect(colClass({className: 'custom', xs: {order: 1, col: 0}})).toBe('custom order-1 col')
      expect(colClass({className: 'custom', xs: {align: 'auto', col: 0}})).toBe('custom align-self-auto col')
      expect(colClass({className: 'custom', xs: {align: 'center', col: 0}})).toBe('custom align-self-center col')
      expect(colClass({className: 'custom', md: {align: 'end', col: 0}})).toBe('custom align-self-md-end col-md')
      expect(colClass({className: 'custom', sm: {align: 'start', col: 0}})).toBe('custom align-self-sm-start col-sm')
    })
  })
})