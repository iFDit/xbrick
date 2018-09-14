import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Button } from 'src/buttons/Button'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

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
  displayName(Button, 'xbrick.Button')

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
})
