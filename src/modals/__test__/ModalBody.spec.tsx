import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ModalBody, modalBodyClass } from 'src/modals/ModalBody'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('ModalBody', () => {
  const child = <p>111</p>
  notCrash(ModalBody)
  defaultTag(ModalBody, 'div')
  defaultProps(ModalBody, { tag: 'div' })
  renderChild(ModalBody, child, 'p')
  customTag(ModalBody, 'section', 'section')
  displayName(ModalBody, 'xbrick.ModalBody')

  it('should render correct className when set different props', () => {
    const node = mount(<ModalBody />)
    expect(node.find('div').hasClass('modal-body')).toBe(true)
  })

  describe('modalBodyClass', () => {
    it('should create default className', () => {
      expect(modalBodyClass()).toBe('modal-body')
      expect(modalBodyClass({className: 'custom'})).toBe('custom modal-body')
    })
  })
})
