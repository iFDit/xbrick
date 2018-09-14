import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Form } from 'src/form/Form'
import { notCrash, renderChild, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

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
})
