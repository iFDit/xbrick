import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Modal, ModalContext } from 'src/modals/Modal'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Modal', () => {
  const child = <p>111</p>
  notCrash(Modal)
  defaultTag(Modal, 'div')
  defaultProps(Modal, { tag: 'div', open: false, transition: true })
  renderChild(Modal, child, 'p')
  customTag(Modal, 'section', 'section')
  displayName(Modal, 'xbrick.Modal')

  it('should not crash when render Dialog only', () => {
    mount(<Modal.Dialog/>)
  })

  it('should not crash when render Backdrop only', () => {
    mount(<Modal.Backdrop/>)
  })

  it('should render with backdrop', () => {
    const node = mount(
      <Modal>
        <Modal.Backdrop/>
      </Modal>,
    )
    node.setProps({open: true})
    expect(node.find('.modal-backdrop').hostNodes().length).toBe(1)
    node.unmount()
  })

  it('should render with dialog', () => {
    const node = mount(
      <Modal>
        <Modal.Dialog/>
      </Modal>,
    )
    expect(node.find('.modal-dialog').hostNodes().length).toBe(1)
  })

  it('should handle not object props', () => {
    const MyTest = (props: any) => <p>test</p>
    const notObject: any = 'test'
    mount(
      <Modal>
        <ModalContext.Consumer>
          {({getModalDialogProps}) => <MyTest {...getModalDialogProps(notObject)}/>}
        </ModalContext.Consumer>
      </Modal>,
    )
  })

  it('should render correct className when set different props', () => {
    const node = mount(<Modal/>)
    expect(node.find('div').hasClass('modal')).toBe(true)
  })

  it('should invoked afterClose after modal was close', (next) => {
    const node = mount(<Modal open={true} />)
    expect(node.find('div.modal').render().css('display')).toBe('block')
    node.setProps({ open: false, afterClose: () => {
      next()
    }})
  })

  it('should invoked afterOpen after modal was open', (next) => {
    const node = mount(<Modal open={false} />)
    node.setProps({ open: true, afterOpen: () => {
      next()
    }})
  })
})
