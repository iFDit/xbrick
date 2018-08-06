不同颜色的徽标。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Badge } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Badge bstype="primary">primary</Badge>
    <Badge bstype="secondary">Secondary</Badge>
    <Badge bstype="warning">Warning</Badge>
    <Badge bstype="success">Success</Badge>
    <Badge bstype="danger">Danger</Badge>
    <Badge bstype="info">Info</Badge>
    <Badge bstype="light">Light</Badge>
    <Badge bstype="dark">Dark</Badge>
  </div>
, document.getElementById('root'))
````