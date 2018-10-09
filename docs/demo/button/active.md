激活状态

设置active为 `true` 设置按钮为激活状态。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Button active>Primary button</Button>
    <Button color="secondary" active>Button</Button>
  </div>
, document.getElementById('root'))
````
