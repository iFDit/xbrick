## Nav

- 导航组件

````jsx
  <Nav>
    <NavItem>
      <NavLink href="#">Active</NavLink>
    </NavItem>
  </Nav>
````

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `ul` |
| justify | 对齐方式, 有 `start`, `center`, `end`, `around` 和 `between` | string | `start` |
| vertical | 是否展示垂直堆叠的导航 | boolean | `false` |
| navbar | 在navbar中使用 | boolean | `false` |
