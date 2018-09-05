卡片

## 何时使用
提供一个灵活和可扩展的容器。

````jsx
  <Card>content</Card>
````

````jsx
  <Card>
    <CardHead>Card Header</CardHead>
    <CardBody>content</CardBody>
  </Card>
````

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `div` |
| inverse | 反转字体颜色 | boolean | `false` |
| color | 卡片类型 | string | - |
| align | 卡片内容布局 | string | - |
| outline | 是否只改变边框颜色 | boolean | `false` |
