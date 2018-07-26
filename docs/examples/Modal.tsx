import * as React from 'react'
import { Modal, ModalDialog, Button, ModalContent, ModalHeader, ModalTitle, ModalFooter, ModalBody } from 'xbrick'

const Example = class extends React.Component {
  state = {
    show: false,
    backdrop: false,
  }
  render() {
    return (
      <>
        <Button onClick={() => this.setState({ show: true, backdrop: true })}>open</Button>
        <Modal defaultOpen={this.state.show} transition={true}>
          {({ hide, getModalDialogProps }) => (
            <ModalDialog {...getModalDialogProps()}>
              <ModalContent>
                <ModalHeader onIconClick={() => hide()}>
                  <ModalTitle>title</ModalTitle>
                </ModalHeader>
                <ModalBody><p>Modal body text goes here.</p></ModalBody>
                <ModalFooter>
                  <Button bstype="secondary">Close</Button>
                  <Button>Save changes</Button>
                </ModalFooter>
              </ModalContent>
            </ModalDialog>
          )}
        </Modal>
      </>
    )
  }
}

export default Example
