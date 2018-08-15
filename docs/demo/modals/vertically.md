
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Modal, ModalDialog, ModalHeader, ModalTitle, ModalConten, ModalBody, ModalFooter, Button, ModalBackdrop } from 'xbrick'
import 'xbrick/lib/style/index.css'

class Example extends React.Component {
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
      <Fragment>
        <Button onClick={() => this.open()}>Launch demo modal</Button>
        <Modal open={open} >
          <ModalDialog align="center">
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
          </ModalDialog>
          <ModalBackdrop />
        </Modal>
      </Fragment>
    )
  }
}

ReactDOM.render(
  <Example />
, document.getElementById('root'))
````
