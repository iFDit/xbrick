简单的用法，适用于任何文本长度的警告提示。


````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Alert } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Alert bstype="primary">
      This is a primary alert — check it out!
    </Alert>
    <Alert bstype="secondary">
      This is a secondary alert — check it out!
    </Alert>
    <Alert bstype="success">
      This is a success alert — check it out!
    </Alert>
    <Alert bstype="danger">
      This is a danger alert — check it out!
    </Alert>
    <Alert bstype="warning">
      This is a warning alert — check it out!
    </Alert>
    <Alert bstype="info">
      This is a info alert — check it out!
    </Alert>
    <Alert bstype="light">
      This is a light alert — check it out!
    </Alert>
    <Alert bstype="dark">
      This is a dark alert — check it out!
    </Alert>
  </div>
, document.getElementById('root'))
````