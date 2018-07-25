徽标

## 何时使用

可以在通知图标或头像中使用，用于显示需要处理的消息条数或其他相关信息，通过醒目视觉形式吸引用户处理。

## API

```jsx
<Badge>Primary</Badge>
```

```jsx
<Badge link>Primary</Badge>
```

```jsx
<Badge top count={5} />
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `span` |
| top | 是否显示在右上角 | boolean | `false` |
| type | 徽标类型 | string | `primary` |
| pill | 是否显示圆角徽标边框 | boolean | `false` |
| link | 是否显示为link样式的徽章 | boolean | `false` |
| count | 当top为true时，展示的数字 | number\|ReactNode  | `0` |
| maxCount | 展示封顶的数字值 | number | `99` |
