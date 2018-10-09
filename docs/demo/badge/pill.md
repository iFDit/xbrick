展示圆角的徽标。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Badge } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Badge className="mr-2" pill>primary</Badge>
    <Badge color="secondary" className="mr-2" pill>Secondary</Badge>
    <Badge color="warning" className="mr-2" pill>Warning</Badge>
    <Badge color="success" className="mr-2" pill>Success</Badge>
    <Badge color="danger" className="mr-2" pill>Danger</Badge>
    <Badge color="info" className="mr-2" pill>Info</Badge>
    <Badge color="light" className="mr-2" pill>Light</Badge>
    <Badge color="dark" className="mr-2" pill>Dark</Badge>
  </div>
, document.getElementById('root'))
````
