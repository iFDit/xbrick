## Alert

- 为特定的用户提供相应的反馈信息和警告。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterClose | 关闭动画结束后的回掉 | () => void | - |
| tag | 自定义标签 | string\|ReactNode | `div` |
| closable | 默认不显示关闭按钮 | boolean | 无 |
| closeText | 自定义关闭按钮 | string\|ReactNode | 无 |
| bstype | 指定警告提示的样式，有八种选择 `primary`、`secondary`、`success`、`danger`、`warning`、`info`、`light`、`dark` | string | `primary` |
| onClose | 关闭时触发的回调函数 | (e: MouseEvent) => void | 无 |
