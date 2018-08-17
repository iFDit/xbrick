
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Tooltip, UncontrolledTooltip } from 'xbrick'

class Examples extends React.Component {
  state = { open: false }
}

ReactDOM.render(
  <Fragment>
    <UncontrolledTooltip content="tooltip on top" placement="top">
      <Button bstype="secondary">Tooltip on top</Button>
    </UncontrolledTooltip>
    <UncontrolledTooltip content="tooltip on bottom" placement="bottom">
      <Button bstype="secondary">Tooltip on bottom</Button>
    </UncontrolledTooltip>
    <UncontrolledTooltip content="tooltip on left" placement="left">
      <Button bstype="secondary">Tooltip on left</Button>
    </UncontrolledTooltip>
    <UncontrolledTooltip content="tooltip on right" placement="right">
      <Button bstype="secondary">Tooltip on right</Button>
    </UncontrolledTooltip>
  </Fragment>
, document.getElementById('root'))
````
