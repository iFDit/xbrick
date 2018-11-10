import React from 'react'
import { mount } from 'enzyme'
import { CustomInput, containerClass, customInputClass } from 'src/input-group/CustomInput'
import { notCrash, defaultProps, displayName } from 'test/basic'

describe('CustomInput', () => {
  notCrash(CustomInput)
  defaultProps(CustomInput, { label: '', type: 'text', inline: false, plainText: false })
  displayName(CustomInput, 'xbrick.CustomInput')

  it('should render text input by using type="text"', () => {
    const node = mount(<CustomInput id="test-id" />)
    expect(node.find('input').render().attr('type')).toBe('text')
  })

  it('should render select when type is select', () => {
    const node = mount(<CustomInput type="select" size="large" />)
    expect(node.find('select').hostNodes().length).toBe(1)
  })

  it('should render checkbox when type is checkbox', () => {
    const node = mount(<CustomInput type="checkbox"/>)
    expect(node.find('input').render().attr('type')).toBe('checkbox')
  })

  it('should render radio when type is radio', () => {
    const node = mount(<CustomInput type="radio" inline label="radio"/>)
    expect(node.find('input').render().attr('type')).toBe('radio')
  })

  it('should render checkbox or radio with label by using label props', () => {
    const node = mount(<CustomInput type="checkbox" />)
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

  it('should render plainText and readonly by using plainText and readOnly props', () => {
    const node = mount(<CustomInput type="text" plainText readOnly/>)
    expect(node.find('input').hasClass('form-control-plaintext')).toBe(true)
  })

  describe('containerClass', () => {
    it('should create default className', () => {
      expect(containerClass()).toBe('custom-control')
      expect(containerClass({inline: true})).toBe('custom-control custom-control-inline')
      expect(containerClass({inline: true, type: 'radio'})).toBe('custom-control custom-radio custom-control-inline')
      expect(containerClass({inline: true, type: 'checkbox'})).toBe('custom-control custom-control-inline custom-checkbox')
    })
  })

  describe('customInputClass', () => {
    it('should create default className', () => {
      expect(customInputClass()).toBe('custom')
      expect(customInputClass({className: 'myclass'})).toBe('myclass custom')
      expect(customInputClass({className: 'myclass', type: 'range'})).toBe('myclass custom custom-range')
      expect(customInputClass({className: 'myclass', type: 'select'})).toBe('myclass custom custom-select')
      expect(customInputClass({className: 'myclass', type: 'file'})).toBe('myclass custom custom-file-input')
      expect(customInputClass({className: 'myclass', type: 'radio'})).toBe('myclass custom custom-control-input')
      expect(customInputClass({className: 'myclass', type: 'checkbox'})).toBe('myclass custom custom-control-input')
      expect(customInputClass({className: 'myclass', type: 'select', plainText: true})).toBe('myclass custom custom-select form-control-plaintext')
      expect(customInputClass({className: 'myclass', type: 'select', plainText: true, size: 'small'})).toBe('myclass custom custom-select form-control-plaintext form-control-sm')
      expect(customInputClass({className: 'myclass', type: 'select', plainText: true, size: 'large'})).toBe('myclass custom custom-select form-control-plaintext form-control-lg')
    })
  })
})
