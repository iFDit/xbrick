import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ModalContent, modalContentClass } from 'src/modals/ModalContent'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('ModalContent', () => {
  const child = <p>111</p>
  notCrash(ModalContent)
  defaultTag(ModalContent, 'div')
  defaultProps(ModalContent, { tag: 'div' })
  renderChild(ModalContent, child, 'p')
  customTag(ModalContent, 'section', 'section')
  displayName(ModalContent, 'xbrick.ModalContent')

  it('should render correct className when set different props', () => {
    const node = mount(<ModalContent />)
    expect(node.find('div').hasClass('modal-content')).toBe(true)
  })

  describe('modalContentClass', () => {
    it('should create default className', () => {
      expect(modalContentClass()).toBe('modal-content')
      expect(modalContentClass({className: 'custom'})).toBe('custom modal-content')
    })
  })
})
