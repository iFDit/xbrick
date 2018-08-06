块级按钮

设置block为 `true` 来创建一个块级按钮。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Button block>Block level button</Button>
    <Button bstype="secondary" block>Block level button</Button>
  </div>
, document.getElementById('root'))
````
