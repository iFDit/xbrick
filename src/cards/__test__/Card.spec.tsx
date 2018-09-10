import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Card } from 'src/cards/Card'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'light', 'dark']
const aligns = {center: 'text-center', right: 'text-right'}

describe('Card', () => {
  const child = <p>111</p>
  notCrash(Card)
  defaultTag(Card, 'div')
  defaultProps(Card, { tag: 'div' })
  renderChild(Card, child, 'p')
  customTag(Card, 'section', 'section')
  displayName(Card, 'xbrick.Card')

  it('should change color by using color props', () => {
    const node = mount(<Card>1</Card>)
    colors.forEach(color => {
      node.setProps({ color })
      expect(node.find('div').hasClass(`bg-${color}`)).toBe(true)
    })
  })

  it('should change text color by using inverse props', () => {
    const node = mount(<Card inverse>1</Card>)
    expect(node.find('div').hasClass(`text-white`)).toBe(true)
  })

  it('should set different align by using align props', () => {
    const node = mount(<Card>1</Card>)
    Object.keys(aligns).forEach(key => {
      node.setProps({ align: key })
      expect(node.find('div').hasClass(`${aligns[key]}`)).toBe(true)
    })
  })

  it('should render outline styles Card when outline props is true', () => {
    const node = mount(<Card outline>outline</Card>)
    colors.forEach(color => {
      node.setProps({ color })
      expect(node.find('div').hasClass(`border-${color}`)).toBe(true)
    })
  })
})
