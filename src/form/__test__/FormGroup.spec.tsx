import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { FormGroup } from 'src/form/FormGroup'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

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
    expect(node.find('div').hasClass('row')).toBe(true)
  })
})
