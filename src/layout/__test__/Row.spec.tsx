import React from 'react'
import { mount } from 'enzyme'
import { Row, rowClass } from 'src/layout/Row'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('Row', () => {
  const child = <p>111</p>
  notCrash(Row)
  defaultTag(Row, 'div')
  defaultProps(Row, { tag: 'div', render: true, noGutter: true })
  renderChild(Row, child, 'p')
  customTag(Row, 'section', 'section')
  displayName(Row, 'xbrick.Row')

  it('should render correct className when set different props', () => {
    const node = mount(<Row/>)
    expect(node.find('div').hasClass('row')).toBe(true)
    node.setProps({ sm: { align: 'start' } })
    expect(node.find('div').hasClass('align-items-sm-start')).toBe(true)
    node.setProps({ xs: { align: 'start' } })
    expect(node.find('div').hasClass('align-items-start')).toBe(true)
    node.setProps({ sm: { justify: 'start' }})
    expect(node.find('div').hasClass('justify-content-sm-start')).toBe(true)
    node.setProps({ xs: { justify: 'start' }})
    expect(node.find('div').hasClass('justify-content-start')).toBe(true)
    node.setProps({ xs: { justify: 'start' }, sm: { align: 'start' } })
    expect(node.find('div.justify-content-start').hasClass('align-items-sm-start')).toBe(true)
  })

  it('should not render wrap component and pass down layout className', () => {
    const node = mount(<Row render={false}><p>123</p></Row>)
    expect(node.find('p').hasClass('row')).toBe(true)
  })

  describe('rowClass', () => {
    it('should create default className', () => {
      expect(rowClass()).toBe('row')
      expect(rowClass({className: 'custom'})).toBe('custom row')
      expect(rowClass({className: 'custom', noGutter: true})).toBe('custom row no-gutters')
      expect(rowClass({className: 'custom', xs: { align: 'start' }})).toBe('custom row align-items-start')
      expect(rowClass({className: 'custom', xs: { align: 'center' }})).toBe('custom row align-items-center')
      expect(rowClass({className: 'custom', xs: { align: 'end' }})).toBe('custom row align-items-end')
      expect(rowClass({className: 'custom', sm: { align: 'start' }})).toBe('custom row align-items-sm-start')
      expect(rowClass({className: 'custom', sm: { align: 'center' }})).toBe('custom row align-items-sm-center')
      expect(rowClass({className: 'custom', sm: { align: 'end' }})).toBe('custom row align-items-sm-end')
      expect(rowClass({className: 'custom', md: { align: 'start' }})).toBe('custom row align-items-md-start')
      expect(rowClass({className: 'custom', md: { align: 'center' }})).toBe('custom row align-items-md-center')
      expect(rowClass({className: 'custom', md: { align: 'end' }})).toBe('custom row align-items-md-end')
      expect(rowClass({className: 'custom', lg: { align: 'start' }})).toBe('custom row align-items-lg-start')
      expect(rowClass({className: 'custom', lg: { align: 'center' }})).toBe('custom row align-items-lg-center')
      expect(rowClass({className: 'custom', lg: { align: 'end' }})).toBe('custom row align-items-lg-end')
      expect(rowClass({className: 'custom', xs: { justify: 'start' }})).toBe('custom row justify-content-start')
      expect(rowClass({className: 'custom', xs: { justify: 'center' }})).toBe('custom row justify-content-center')
      expect(rowClass({className: 'custom', xs: { justify: 'end' }})).toBe('custom row justify-content-end')
      expect(rowClass({className: 'custom', xs: { justify: 'around' }})).toBe('custom row justify-content-around')
      expect(rowClass({className: 'custom', xs: { justify: 'between' }})).toBe('custom row justify-content-between')
      expect(rowClass({className: 'custom', sm: { justify: 'start' }})).toBe('custom row justify-content-sm-start')
      expect(rowClass({className: 'custom', sm: { justify: 'center' }})).toBe('custom row justify-content-sm-center')
      expect(rowClass({className: 'custom', sm: { justify: 'end' }})).toBe('custom row justify-content-sm-end')
      expect(rowClass({className: 'custom', sm: { justify: 'around' }})).toBe('custom row justify-content-sm-around')
      expect(rowClass({className: 'custom', sm: { justify: 'between' }})).toBe('custom row justify-content-sm-between')
      expect(rowClass({className: 'custom', md: { justify: 'start' }})).toBe('custom row justify-content-md-start')
      expect(rowClass({className: 'custom', md: { justify: 'center' }})).toBe('custom row justify-content-md-center')
      expect(rowClass({className: 'custom', md: { justify: 'end' }})).toBe('custom row justify-content-md-end')
      expect(rowClass({className: 'custom', md: { justify: 'around' }})).toBe('custom row justify-content-md-around')
      expect(rowClass({className: 'custom', md: { justify: 'between' }})).toBe('custom row justify-content-md-between')
      expect(rowClass({className: 'custom', lg: { justify: 'start' }})).toBe('custom row justify-content-lg-start')
      expect(rowClass({className: 'custom', lg: { justify: 'center' }})).toBe('custom row justify-content-lg-center')
      expect(rowClass({className: 'custom', lg: { justify: 'end' }})).toBe('custom row justify-content-lg-end')
      expect(rowClass({className: 'custom', lg: { justify: 'around' }})).toBe('custom row justify-content-lg-around')
      expect(rowClass({className: 'custom', lg: { justify: 'between' }})).toBe('custom row justify-content-lg-between')
    })
  })
})
