
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Tooltip, Button } from 'xbrick'

ReactDOM.render(
  <Fragment>
    <Tooltip content="tooltip" placement="top">
      <Button bstype="secondary">Top</Button>
    </Tooltip>
    <Tooltip content="tooltip" placement="bottom">
      <Button bstype="secondary">Bottom</Button>
    </Tooltip>
    <Tooltip content="tooltip" placement="left">
      <Button bstype="secondary">Left</Button>
    </Tooltip>
    <Tooltip content="tooltip" placement="right">
      <Button bstype="secondary">Right</Button>
    </Tooltip>
  </Fragment>
, document.getElementById('root'))
````
