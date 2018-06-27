折叠面板

## 何时使用
用于显示或隐藏页面上的一些内容。

````jsx
  <Collapse show={true}>
  {({ slideup }) => <p onClick={slideup}>Click me to hide</p>}
  </Collapse>
````
