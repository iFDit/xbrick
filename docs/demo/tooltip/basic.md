
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Tooltip, Button, UncontrolledTooltip } from 'xbrick'

class Examples extends React.Component {
  state = { open: false }
}

ReactDOM.render(
  <Fragment>
    <UncontrolledTooltip content="tooltip on top" placement="top">
      <Button color="secondary">Tooltip on top</Button>
    </UncontrolledTooltip>
    <UncontrolledTooltip content="tooltip on bottom" placement="bottom">
      <Button color="warning">Tooltip on bottom</Button>
    </UncontrolledTooltip>
    <UncontrolledTooltip content="tooltip on left" placement="left">
      <Button color="info">Tooltip on left</Button>
    </UncontrolledTooltip>
    <UncontrolledTooltip content="tooltip on right" placement="right">
      <Button color="danger">Tooltip on right</Button>
    </UncontrolledTooltip>
  </Fragment>
, document.getElementById('root'))
````
