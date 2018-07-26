## ModalHeader

- 显示Modal的头部信息

````jsx
  <ModalHeader onIconClick={() => this.setState({ show: false })}>
    <ModalTitle>title</ModalTitle>
  </ModalHeader>
````

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `div` |
| closeIcon | 设置右上角关闭图标 | ReactNode | `<Close>` |
| onIconClick | 右上角图标点击时的回调 | function | 无 |
