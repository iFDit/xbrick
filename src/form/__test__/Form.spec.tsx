import React from 'react'
import { mount } from 'enzyme'
import { Form, formClass } from 'src/form/Form'
import { notCrash, renderChild, defaultProps, displayName } from 'test/basic'

describe('Form', () => {
  const child = <p>111</p>
  notCrash(Form)
  defaultProps(Form, { inline: false })
  renderChild(Form, child, 'p')
  displayName(Form, 'xbrick.Form')

  it('should render inline form by using inline props', () => {
    const node = mount(<Form inline/>)
    expect(node.find('form').hasClass('form-inline')).toBe(true)
  })

  describe('formClass', () => {
    it('should create default className', () => {
      expect(formClass()).toBe('')
      expect(formClass({className: 'custom'})).toBe('custom')
      expect(formClass({className: 'custom', inline: true})).toBe('custom form-inline')
    })
  })
})
