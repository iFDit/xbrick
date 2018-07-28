## Navbar

- 灵活，可扩展的响应式导航栏

````jsx
  <Navbar>
    {({ getTogglerProps, getCollapseProps }) => (<p>navbar</p>)}
  </Navbar>
````

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `ul` |
| expand | 响应式导航最小宽度 | string | `xs` |
| justify | 对齐方式, 有 `start`, `center`, `end`, `around` 和 `between` | string | 无 |
| bgColor | navbar背景颜色 | string | `light` |
| reverse | navbar字体颜色, 用于bgColor为深色时候 | boolean | `false` |
| fixed | navbar定位, 可选 `top` \| `bottom` | string | 无 |
| sticky | navbar粘贴在顶部 | boolean | `false` |