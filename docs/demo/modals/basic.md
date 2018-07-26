基本使用

````jsx
import { Modal, ModalDialog, ModalHeader, ModalTitle, ModalConten, ModalBody, ModalFooter, Button } from 'xbrick'

ReactDOM.render(
  <Modal defaultOpen={true}>
    {({ hide, getModalDialogProps }) => (
      <ModalDialog {...getModalDialogProps()}>
        <ModalContent>
          <ModalHeader onIconClick={() => this.setState({ show: false })}>
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
, rootNode)
````
