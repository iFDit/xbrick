设置`link = true`将徽标变成一个链接。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Badge } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Badge className="mr-2" tag="a" href="#">primary</Badge>
    <Badge color="secondary" className="mr-2" tag="a" href="#">Secondary</Badge>
    <Badge color="warning" className="mr-2" tag="a" href="#">Warning</Badge>
    <Badge color="success" className="mr-2" tag="a" href="#">Success</Badge>
    <Badge color="danger" className="mr-2" tag="a" href="#">Danger</Badge>
    <Badge color="info" className="mr-2" tag="a" href="#">Info</Badge>
    <Badge color="light" className="mr-2" tag="a" href="#">Light</Badge>
    <Badge color="dark" className="mr-2" tag="a" href="#">Dark</Badge>
  </div>
, document.getElementById('root'))
````
