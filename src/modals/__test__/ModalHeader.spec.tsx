import React from 'react'
import { mount } from 'enzyme'
import { ModalHeader, modalHeaderClass } from 'src/modals/ModalHeader'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('ModalHeader', () => {
  const child = <p>111</p>
  notCrash(ModalHeader)
  defaultTag(ModalHeader, 'div')
  defaultProps(ModalHeader, { tag: 'div' })
  renderChild(ModalHeader, child, 'p')
  customTag(ModalHeader, 'section', 'section')
  displayName(ModalHeader, 'xbrick.ModalHeader')

  it('should render correct className when set different props', () => {
    const node = mount(<ModalHeader />)
    expect(node.find('div').hasClass('modal-header')).toBe(true)
  })

  it('should not render close icon by setting closeIcon props null', () => {
    const node = mount(<ModalHeader closeIcon={null}/>)
    expect(node.find('.close').hostNodes().length).toBe(0)
  })

  it('should handle close onclick by using onIconClick props', next => {
    const node = mount(<ModalHeader/>)
    node.find('.close').simulate('click')
    node.setProps({onIconClick: () => next()})
    node.find('.close').simulate('click')
  })

  describe('modalHeaderClass', () => {
    it('should create default className', () => {
      expect(modalHeaderClass()).toBe('modal-header')
      expect(modalHeaderClass({className: 'custom'})).toBe('custom modal-header')
    })
  })
})
