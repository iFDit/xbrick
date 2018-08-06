展示圆角的徽标。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Badge } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Badge bstype="primary" pill>primary</Badge>
    <Badge bstype="secondary" pill>Secondary</Badge>
    <Badge bstype="warning" pill>Warning</Badge>
    <Badge bstype="success" pill>Success</Badge>
    <Badge bstype="danger" pill>Danger</Badge>
    <Badge bstype="info" pill>Info</Badge>
    <Badge bstype="light" pill>Light</Badge>
    <Badge bstype="dark" pill>Dark</Badge>
  </div>
, document.getElementById('root'))
````
