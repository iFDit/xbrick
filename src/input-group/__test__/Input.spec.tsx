import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Input, inputClass } from 'src/input-group/Input'
import { notCrash, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Input', () => {
  notCrash(Input)
  defaultProps(Input, { type: 'text', size: 'middle', plainText: false })
  displayName(Input, 'xbrick.Input')

  it('should render text input by using type="text"', () => {
    const node = mount(<Input id="name" />)
    expect(node.find('input').render().attr('type')).toBe('text')
  })
  
  it('should render text input by using type="textarea"', () => {
    const node = mount(<Input type="textarea"/>)
    expect(node.find('textarea').hostNodes().length).toBe(1)
  })

  it('should render select when type is select', () => {
    const node = mount(<Input type="select" size="large" />)
    expect(node.find('select').hostNodes().length).toBe(1)
  })

  it('should render checkbox when type is checkbox', () => {
    const node = mount(<Input type="checkbox"/>)
    expect(node.find('input').render().attr('type')).toBe('checkbox')
  })

  it('should render radio when type is radio', () => {
    const node = mount(<Input type="radio" inline label="radio"/>)
    expect(node.find('input').render().attr('type')).toBe('radio')
  })

  it('should render checkbox or radio with label by using label props', () => {
    const node = mount(<Input type="checkbox" />)
    expect(node.find('label').hostNodes().length).toBe(0)
    node.setProps({ label: 'myCheckbox' })
    expect(node.find('label').text()).toBe('myCheckbox')
  })

  it('should render select with label by using label props', () => {
    const node = mount(<Input type="select"/>)
    expect(node.find('label').hostNodes().length).toBe(0)
    node.setProps({ label: 'mySelect' })
    expect(node.find('label').text()).toBe('mySelect')
  })

  it('should render plainText and readonly by using plainText and readOnly props', () => {
    const node = mount(<Input type="text" plainText readOnly/>)
    expect(node.find('input').hasClass('form-control-plaintext')).toBe(true)
  })

  describe('inputClass', () => {
    it('should create default className', () => {
      expect(inputClass()).toBe('form-control')
      expect(inputClass({className: 'myclass'})).toBe('myclass form-control')
      expect(inputClass({className: 'myclass', type: 'select'})).toBe('myclass form-control')
      expect(inputClass({className: 'myclass', type: 'file'})).toBe('myclass form-control-file')
      expect(inputClass({className: 'myclass', type: 'range'})).toBe('myclass form-control-range')
      expect(inputClass({className: 'myclass', type: 'radio'})).toBe('myclass form-check-input')
      expect(inputClass({className: 'myclass', type: 'checkbox'})).toBe('myclass form-check-input')
      expect(inputClass({className: 'myclass', type: 'radio', size: 'small'})).toBe('myclass form-check-input')
      expect(inputClass({className: 'myclass', type: 'checkbox', size: 'small'})).toBe('myclass form-check-input')
      expect(inputClass({className: 'myclass', plainText: true})).toBe('myclass form-control-plaintext')
      expect(inputClass({className: 'myclass', plainText: true, size: 'small'})).toBe('myclass form-control-plaintext form-control-sm')
      expect(inputClass({className: 'myclass', plainText: true, size: 'large'})).toBe('myclass form-control-plaintext form-control-lg')
    })
  })
})
