import React from 'react'
import { mount } from 'enzyme'
import { FormGroup, formGroupClass } from 'src/form/FormGroup'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('FormGroup', () => {
  const child = <p>111</p>
  notCrash(FormGroup)
  defaultTag(FormGroup, 'div')
  defaultProps(FormGroup, { tag: 'div', row: false, check: false, inline: false })
  renderChild(FormGroup, child, 'p')
  customTag(FormGroup, 'section', 'section')
  displayName(FormGroup, 'xbrick.FormGroup')

  it('should render check form group by using check props', () => {
    const node = mount(<FormGroup check/>)
    expect(node.find('div').hasClass('form-check')).toBe(true)
  })

  it('should render inline check form group by using inline and check props', () => {
    const node = mount(<FormGroup inline check/>)
    expect(node.find('div').hasClass('form-check-inline')).toBe(true)
  })

  it('should render layout row by using row props', () => {
    const node = mount(<FormGroup row/>)
    expect(node.find('div').hasClass('form-row')).toBe(true)
  })

  describe('formGroupClass', () => {
    it('should create default className', () => {
      expect(formGroupClass()).toBe('form-group')
      expect(formGroupClass({className: 'custom'})).toBe('custom form-group')
      expect(formGroupClass({className: 'custom', row: true})).toBe('custom form-row')
      expect(formGroupClass({className: 'custom', check: true})).toBe('custom form-check')
      expect(formGroupClass({className: 'custom', check: true})).toBe('custom form-check')
      expect(formGroupClass({className: 'custom', inline: true})).toBe('custom form-group')
      expect(formGroupClass({className: 'custom', check: true, inline: true})).toBe('custom form-check form-check-inline')
    })
  })
})
