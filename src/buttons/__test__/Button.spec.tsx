import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Button, buttonClass } from 'src/buttons/Button'
import { notCrash, renderChild, customTag, defaultTag, defaultProps } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })
const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'light', 'dark']
const size = {
  large: 'lg',
  small: 'sm',
}
describe('Button', () => {
  const child = <p>111</p>
  notCrash(Button)
  defaultTag(Button, 'button')
  defaultProps(Button, { tag: 'button', color: 'primary', disabled: false, outline: false, active: false, block: false })
  renderChild(Button, child, 'p')
  customTag(Button, 'div', 'div')

  it('should change color by using color props', () => {
    const node = mount(<Button>1</Button>)
    colors.forEach(color => {
      node.setProps({ color })
      expect(node.find('button').hasClass(`btn-${color}`)).toBe(true)
    })
  })

  it('should change Button size by using size props', () => {
    const node = mount(<Button>1</Button>)
    Object.keys(size).forEach(s => {
      node.setProps({ size: s })
      expect(node.find('button').hasClass(`btn-${size[s]}`)).toBe(true)
    })
  })

  it('should display a block Button when block props is true', () => {
    const node = mount(<Button block>1</Button>)
    expect(node.find('button').hasClass('btn-block')).toBe(true)
  })

  it('should be active by using active props', () => {
    const node = mount(<Button active>active</Button>)
    expect(node.find('button').hasClass('active')).toBe(true)
  })

  it('should be disabled by using disabled props', () => {
    const node = mount(<Button disabled>disabled</Button>)
    expect(node.find('button').hasClass('disabled')).toBe(true)
  })

  it('should render outline styles Button when outline props is true', () => {
    const node = mount(<Button outline>outline</Button>)
    colors.forEach(color => {
      node.setProps({ color })
      expect(node.find('button').hasClass(`btn-outline-${color}`)).toBe(true)
    })
  })

  describe('buttonClass', () => {
    it('should create default className', () => {
      const classnameTest = (classnames: string[], testClass: string[]) => {
        classnames.forEach(name => {
          expect(testClass.includes(name)).toBe(true)
        })
      }
      expect(buttonClass()).toBe('btn')
      colors.forEach((color: any) => {
        const baseClass = ['btn', color]
        classnameTest(baseClass, buttonClass({className: color, color }).split(' '))
        classnameTest(baseClass.concat([`btn-${color}`]), buttonClass({className: color, color }).split(' '))
        classnameTest(
          baseClass.concat(['btn-block']),
          buttonClass({className: color, color, block: true }).split(' '),
        )
        classnameTest(
          baseClass.concat([`btn-outline-${color}`]),
          buttonClass({className: color, color, outline: true }).split(' '),
        )
        classnameTest(
          baseClass.concat(['btn-sm']),
          buttonClass({className: color, color, size: 'small' }).split(' '),
        )
        classnameTest(
          baseClass.concat(['btn-lg']),
          buttonClass({className: color, color, size: 'large' }).split(' '),
        )
        classnameTest(
          baseClass.concat(['active']),
          buttonClass({className: color, color, active: true }).split(' '),
        )
        classnameTest(
          baseClass.concat(['disabled']),
          buttonClass({className: color, color, disabled: true }).split(' '),
        )
      })
    })
  })
})
