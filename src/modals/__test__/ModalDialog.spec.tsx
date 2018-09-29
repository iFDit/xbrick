import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ModalDialog, modalDialogClass } from 'src/modals/ModalDialog'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('ModalDialog', () => {
  const child = <p>111</p>
  notCrash(ModalDialog)
  defaultTag(ModalDialog, 'div')
  defaultProps(ModalDialog, { tag: 'div', size: 'middle', show: false, align: 'start' })
  renderChild(ModalDialog, child, 'p')
  customTag(ModalDialog, 'section', 'section')
  displayName(ModalDialog, 'xbrick.ModalDialog')

  it('should render correct className when set different props', () => {
    const node = mount(<ModalDialog/>)
    expect(node.find('div').hasClass('modal-dialog')).toBe(true)
    node.setProps({ align: 'center' })
    expect(node.find('div.modal-dialog').hasClass('modal-dialog-centered')).toBe(true)
  })

  it('should render with animate when active props is true', next => {
    const node = mount(<ModalDialog active={true} show={true}/>)
    node.setProps({afterStateChange: () => next(), show: false })
  })

  describe('modalDialogClass', () => {
    it('should create default className', () => {
      expect(modalDialogClass()).toBe('modal-dialog')
      expect(modalDialogClass({className: 'custom'})).toBe('custom modal-dialog')
      expect(modalDialogClass({className: 'custom', size: 'small'})).toBe('custom modal-dialog modal-sm')
      expect(modalDialogClass({className: 'custom', size: 'middle'})).toBe('custom modal-dialog')
      expect(modalDialogClass({className: 'custom', size: 'large'})).toBe('custom modal-dialog modal-lg')
      expect(modalDialogClass({className: 'custom', align: 'center'})).toBe('custom modal-dialog modal-dialog-centered')
    })
  })
})
