输入框组

#### 何时使用
使用组合型输入框，例如搜索等等。

````jsx
  <InputGroup>
    <InputGroupAddon>
      <InputGroupText>@</InputGroupText>
    </InputGroupAddon>
    <Input placehold="Username" />
  </InputGroup>
````

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `div` |
| size | 设置大小，可选：`small` 和 `large` | string | `middle` |
