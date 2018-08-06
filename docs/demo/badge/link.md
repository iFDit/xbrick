设置`link = true`将徽标变成一个链接。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Badge } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Badge bstype="primary" link>primary</Badge>
    <Badge bstype="secondary" link>Secondary</Badge>
    <Badge bstype="warning" link>Warning</Badge>
    <Badge bstype="success" link>Success</Badge>
    <Badge bstype="danger" link>Danger</Badge>
    <Badge bstype="info" link>Info</Badge>
    <Badge bstype="light" link>Light</Badge>
    <Badge bstype="dark" link>Dark</Badge>
  </div>
, document.getElementById('root'))
````
