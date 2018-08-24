## Modal

- 可以打开一个浮层用于提示用户进行相关的操作。

````jsx
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
````

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `div` |
| open | 控制Modal的显示 | boolean | `false` |
| transition | 是否使用动画 | boolean | `true` |
| onClose | 在Modal关闭时触发 | function | - |
| afterClose | 在Modal关闭后触发 | function | - |
| afterOpen | 在Modal打开后触发 | function | - |
