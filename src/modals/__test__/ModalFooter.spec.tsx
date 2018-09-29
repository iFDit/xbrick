import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ModalFooter, modalFooterClass } from 'src/modals/ModalFooter'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('ModalFooter', () => {
  const child = <p>111</p>
  notCrash(ModalFooter)
  defaultTag(ModalFooter, 'div')
  defaultProps(ModalFooter, { tag: 'div' })
  renderChild(ModalFooter, child, 'p')
  customTag(ModalFooter, 'section', 'section')
  displayName(ModalFooter, 'xbrick.ModalFooter')

  it('should render correct className when set different props', () => {
    const node = mount(<ModalFooter/>)
    expect(node.find('div').hasClass('modal-footer')).toBe(true)
  })

  describe('modalFooterClass', () => {
    it('should create default className', () => {
      expect(modalFooterClass()).toBe('modal-footer')
      expect(modalFooterClass({className: 'custom'})).toBe('custom modal-footer')
    })
  })
})
