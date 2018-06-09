import * as React from 'react'
import { Button, ButtonGroup } from 'xbrick'

const Example = () => {
  return (
    <>
      <ButtonGroup size="large">
        <Button>Active</Button>
        <Button>Like</Button>
        <Button>Primary</Button>
      </ButtonGroup>
      <ButtonGroup size="middle">
        <Button bstype="secondary">Active</Button>
        <Button bstype="secondary">Like</Button>
        <Button bstype="secondary">Primary</Button>
      </ButtonGroup>
      <ButtonGroup size="small">
        <Button bstype="info">Active</Button>
        <Button bstype="info">Like</Button>
        <Button bstype="info">Primary</Button>
      </ButtonGroup>
    </>
  )
}

 export default Example
