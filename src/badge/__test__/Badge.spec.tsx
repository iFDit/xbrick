import React from 'react'
import { mount } from 'enzyme'
import { Badge, badgeClass } from 'src/badge/Badge'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'light', 'dark']

describe('Badge', () => {
  const child = <p>111</p>
  notCrash(Badge)
  defaultTag(Badge, 'span')
  defaultProps(Badge, { tag: 'span', pill: false, color: 'primary' })
  renderChild(Badge, child, 'p')
  customTag(Badge, 'div', 'div')
  displayName(Badge, 'xbrick.Badge')

  it('should change color by using color props', () => {
    const node = mount(<Badge>1</Badge>)
    colors.forEach(color => {
      node.setProps({ color })
      expect(node.find('span').hasClass(`badge-${color}`)).toBe(true)
    })
  })

  it('should render pill badge if pill props is true', () => {
    const node = mount(<Badge pill>1</Badge>)
    expect(node.find('span').hasClass('badge-pill')).toBe(true)
  })

  describe('badgeClass', () => {
    it('should create default className', () => {
      const className = badgeClass({className: 'test'})
      colors.forEach((color: any) => {
        expect(badgeClass({className: color, color })).toBe(`${color} badge badge-${color}`)
      })
      expect(/test/.test(className)).toBe(true)
      expect(/badge/.test(className)).toBe(true)
      expect(badgeClass({className: ''})).toBe('badge')
      expect(/badge-pill/.test(badgeClass({pill: true}))).toBe(true)
      expect(/badge/.test(badgeClass({pill: true}))).toBe(true)
    })
  })
})
