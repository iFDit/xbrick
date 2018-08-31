禁用

设置disabled为 `true` 将按钮设置为禁用状态，onClick在禁用状态失效。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Button disabled>Primary button</Button>
    <Button color="secondary" disabled>Secondary button</Button>
  </div>
, document.getElementById('root'))
````
