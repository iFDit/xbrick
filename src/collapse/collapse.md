折叠面板

## 何时使用
用于显示或隐藏页面上的一些内容。

````jsx
  <Collapse show={true}>
  {({ slideup }) => <p onClick={slideup}>Click me to hide</p>}
  </Collapse>
````

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `div` |
| open | 是否展开 | boolean | `false` |
| afterChange | 动画结束后回调 | function | - |
