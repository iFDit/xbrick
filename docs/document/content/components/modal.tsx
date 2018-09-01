import React from 'react'
import { Col, Button } from 'xbrick'
import { Modal, ModalDialog, ModalHeader, ModalTitle, ModalContent, ModalBody, ModalFooter, ModalBackdrop } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/modals/basic.md'
import scrolling from 'docs/demo/modals/scrolling.md'
import vertically from 'docs/demo/modals/vertically.md'
import sizing from 'docs/demo/modals/sizing.md'

// API
import api from 'src/modals/modal.md'
import dialogapi from 'src/modals/modal-dialog.md'
import headerapi from 'src/modals/modal-header.md'
import backdropapi from 'src/modals/modal-backdrop.md'
import bodyapi from 'src/modals/modal-body.md'
import titleapi from 'src/modals/modal-title.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function ModalsContent() {
  return new Content('Modal')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Scrolling long content', anchor: 'scrolling-long-content' })
    .addNav({ text: 'Vertically centered', anchor: 'vertically-centered' })
    .addNav({ text: 'Sizing', anchor: 'sizing' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Modal组件是一种模态的用户界面覆盖层，常用于用户确认，宣传新的功能等。</p>
          <p>使用：</p>
          <ul>
            <li>使用在与用户交互操作中，例如：需要用户提供信息或修改设置。</li>
            <li>在重要的操作前警告并提示用户确认操作，例如：删除某项数据。</li>
          </ul>
          <p>不使用：</p>
          <ul>
            <li>不要过度使用Modal，Modal通常会打断工作流，从而降低用户体验。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: <p>简单的Modal组件，包括了Dialog， Content, Header, Title, Body, Footer和Backdrop组件</p>,
      content: (
        <Examples/>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Scrolling long content',
      describe: <p>当Modal显示的内容长度超过视口高度的时候，会自动显示滚动条</p>,
      content: (
        <Scrolling/>
      ),
      codeText: getCodeFromString(converter.makeHtml(scrolling)),
    })
    .addSection({
      title: 'Vertically centered',
      describe: <p>align属性可以改变ModalDialog显示的位置。</p>,
      content: (
        <Vertically/>
      ),
      codeText: getCodeFromString(converter.makeHtml(vertically)),
    })
    .addSection({
      title: 'Sizing',
      describe: <p>size属性修改ModalDialog的大小，也可以通过style来修改。</p>,
      content: (
        <Sizing />
      ),
      codeText: getCodeFromString(converter.makeHtml(sizing)),
    })
    .addAPI({
      header: true,
      title: 'Modal',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'ModalDialog',
      content: getTableFromString(converter.makeHtml(dialogapi)),
    })
    .addAPI({
      title: 'ModalHeader',
      content: getTableFromString(converter.makeHtml(headerapi)),
    })
    .addAPI({
      title: 'ModalBackdrop',
      content: getTableFromString(converter.makeHtml(backdropapi)),
    })
    .addAPI({
      title: 'ModalTitle',
      content: getTableFromString(converter.makeHtml(titleapi)),
    })
    .addAPI({
      title: 'ModalContent',
      content: '',
    })
    .addAPI({
      title: 'ModalFooter',
      content: '',
    })
    .addAPI({
      title: 'ModalBody',
      content: getTableFromString(converter.makeHtml(bodyapi)),
    })
    .render()
}

class Examples extends React.Component {
  public state = { open: false }

  open = () => {
    this.setState({ open: true })
  }

  close = () => {
    this.setState({ open: false })
  }
  render () {
    const { open } = this.state
    return (
      <>
        <Button onClick={() => this.open()}>Launch demo modal</Button>
        <Modal open={open}>
          <Modal.Dialog>
            <ModalContent>
              <ModalHeader onIconClick={() => this.close()}>
                <ModalTitle>title</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <p>
                  Cras mattis consectetur purus sit amet fermentum.
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                  porta ac consectetur ac, vestibulum at eros.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button bstype="secondary">Close</Button>
                <Button>Save changes</Button>
              </ModalFooter>
            </ModalContent>
          </Modal.Dialog>
          <Modal.Backdrop />
        </Modal>
      </>
    )
  }
}

class Scrolling extends Examples {
  render () {
    const { open } = this.state
    return (
      <>
        <Button onClick={() => this.open()}>Launch demo modal</Button>
        <Modal open={open}>
          <Modal.Dialog>
            <ModalContent>
              <ModalHeader onIconClick={() => this.close()}>
                <ModalTitle>title</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
              </ModalBody>
              <ModalFooter>
                <Button bstype="secondary">Close</Button>
                <Button>Save changes</Button>
              </ModalFooter>
            </ModalContent>
          </Modal.Dialog>
          <Modal.Backdrop />
        </Modal>
      </>
    )
  }
}

class Vertically extends Examples {
  render () {
    const { open } = this.state
    return (
      <>
        <Button onClick={() => this.open()}>Launch demo modal</Button>
        <Modal open={open} >
          <Modal.Dialog align="center">
            <ModalContent>
              <ModalHeader onIconClick={() => this.close()}>
                <ModalTitle>title</ModalTitle>
              </ModalHeader>
              <ModalBody><p>Modal body text goes here.</p></ModalBody>
              <ModalFooter>
                <Button bstype="secondary">Close</Button>
                <Button>Save changes</Button>
              </ModalFooter>
            </ModalContent>
          </Modal.Dialog>
          <Modal.Backdrop />
        </Modal>
      </>
    )
  }
}

class Sizing extends Examples {
  openWith = (size: string) => {
    this.open()
    this.setState({ size })
  }
  render () {
    const { open, size } = this.state as any
    return (
      <>
        <Button onClick={() => this.openWith('large')} className="mr-2">Large modal</Button>
        <Button onClick={() => this.openWith('small')}>Small modal</Button>
        <Modal open={open}>
          <Modal.Dialog size={size}>
            <ModalContent>
              <ModalHeader onIconClick={() => this.close()}>
                <ModalTitle>title</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <p>
                  Cras mattis consectetur purus sit amet fermentum.
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                  porta ac consectetur ac, vestibulum at eros.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button bstype="secondary">Close</Button>
                <Button>Save changes</Button>
              </ModalFooter>
            </ModalContent>
          </Modal.Dialog>
          <Modal.Backdrop />
        </Modal>
      </>
    )
  }
}
