import * as React from 'react'
import { Button } from 'xbrick'

const Example = () => {
  return (
    <>
      <Button outline>Primary</Button>
      <Button bstype="secondary" outline>secondary</Button>
      <Button bstype="success" outline>success</Button>
      <Button bstype="danger" outline>danger</Button>
      <Button bstype="warning" outline>warning</Button>
      <Button bstype="info" outline>info</Button>
      <Button bstype="light" outline>light</Button>
      <Button bstype="dark" outline>dark</Button>
      <Button bstype="link" outline>link</Button>
    </>
  )
}

export default Example
