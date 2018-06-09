import * as React from 'react'
import { Button, ButtonGroup, ButtonToolbar } from 'xbrick'

const Example = () => {
  return (
    <ButtonToolbar>
      <ButtonGroup>
        <Button>Primary</Button>
        <Button>Other</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button bstype="info">Info</Button>
        <Button bstype="warning">Warning</Button>
      </ButtonGroup>
    </ButtonToolbar>
  )
}

export default Example
