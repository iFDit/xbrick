import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CustomInput } from 'src/input-group/CustomInput'
import { notCrash, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CustomInput', () => {
  // const child = <p>111</p>
  notCrash(CustomInput)
  // defaultTag(CustomInput, 'div')
  defaultProps(CustomInput, { label: '', type: 'text', inline: false, plainText: false })
  // renderChild(CustomInput, child, 'p')
  // customTag(CustomInput, 'a', 'a')
  displayName(CustomInput, 'xbrick.CustomInput')

  it('should render text input by using type="text"', () => {
    const node = mount(<CustomInput/>)
    expect(node.find('input').render().attr('type')).toBe('text')
  })

  it('should render select when type is select', () => {
    const node = mount(<CustomInput type="select" />)
    expect(node.find('select').hostNodes().length).toBe(1)
  })

  it('should render checkbox when type is checkbox', () => {
    const node = mount(<CustomInput type="checkbox"/>)
    expect(node.find('input').render().attr('type')).toBe('checkbox')
  })

  it('should render radio when type is radio', () => {
    const node = mount(<CustomInput type="radio" />)
    expect(node.find('input').render().attr('type')).toBe('radio')
  })

  it('should render checkbox or radio with label by using label props', () => {
    const node = mount(<CustomInput type="checkbox"/>)
    expect(node.find('label').hostNodes().length).toBe(0)
    node.setProps({ label: 'myCheckbox' })
    expect(node.find('label').text()).toBe('myCheckbox')
  })

  it('should render select with label by using label props', () => {
    const node = mount(<CustomInput type="select"/>)
    expect(node.find('label').hostNodes().length).toBe(0)
    node.setProps({ label: 'mySelect' })
    expect(node.find('label').text()).toBe('mySelect')
  })
})
