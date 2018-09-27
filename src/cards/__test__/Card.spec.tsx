import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Card, cardClass } from 'src/cards/Card'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'light', 'dark']
const aligns = {center: 'text-center', right: 'text-right'}

describe('Card', () => {
  const child = <p>111</p>
  notCrash(Card)
  defaultTag(Card, 'div')
  defaultProps(Card, { tag: 'div', inverse: false, outline: false })
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

  describe('cardClass', () => {
    it('should create default className', () => {
      const classnameTest = (classnames: string[], testClass: string[]) => {
        classnames.forEach(name => {
          expect(testClass.includes(name)).toBe(true)
        })
      }
      expect(cardClass()).toBe('card')
      colors.forEach((color: any) => {
        const baseClass = ['card', 'custom']
        classnameTest(
          baseClass.concat([`bg-${color}`]),
          cardClass({className: 'custom', color }).split(' '),
        )
        classnameTest(
          baseClass.concat([`text-center`]),
          cardClass({className: 'custom', color, align: 'center' }).split(' '),
        )
        classnameTest(
          baseClass.concat([`text-right`]),
          cardClass({className: 'custom', color, align: 'right' }).split(' '),
        )
        classnameTest(
          baseClass.concat([`text-white`]),
          cardClass({className: 'custom', color, inverse: true }).split(' '),
        )
        classnameTest(
          baseClass.concat([`border-${color}`]),
          cardClass({className: 'custom', color, outline: true }).split(' '),
        )
      })
    })
  })
})
