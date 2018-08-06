按钮尺寸。

通过设置size属性值为 `large`、`middle`、`small` 来调整按钮的大小。分别对应大尺寸、中尺寸和小尺寸。
默认为中尺寸。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Button size="large">Primary</Button>
    <Button size="middle">Primary</Button>
    <Button size="small">Primary</Button>
  </div>
, document.getElementById('root'))
````
