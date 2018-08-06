简单的用法，用于在文字后面展示徽标，徽标会根据`em`自动适配。


````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Badge } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <h1>Example heading <Badge>New</Badge></h1>
    <h2>Example heading <Badge>New</Badge></h2>
    <h3>Example heading <Badge>New</Badge></h3>
    <h4>Example heading <Badge>New</Badge></h4>
    <h5>Example heading <Badge>New</Badge></h5>
    <h6>Example heading <Badge>New</Badge></h6>
    <Button>Notifications<Badge bstype="light">4</Badge></Button>
  </div>
, document.getElementById('root'))
````