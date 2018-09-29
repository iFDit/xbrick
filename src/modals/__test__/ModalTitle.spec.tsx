import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ModalTitle, modalTitleClass } from 'src/modals/ModalTitle'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('ModalTitle', () => {
  const child = <p>111</p>
  notCrash(ModalTitle)
  defaultTag(ModalTitle, 'h5')
  defaultProps(ModalTitle, { tag: 'h5' })
  renderChild(ModalTitle, child, 'p')
  customTag(ModalTitle, 'section', 'section')
  displayName(ModalTitle, 'xbrick.ModalTitle')

  it('should render correct className when set different props', () => {
    const node = mount(<ModalTitle />)
    expect(node.find('h5').hasClass('modal-title')).toBe(true)
  })

  describe('modalTitleClass', () => {
    it('should create default className', () => {
      expect(modalTitleClass()).toBe('modal-title')
      expect(modalTitleClass({className: 'custom'})).toBe('custom modal-title')
    })
  })
})
