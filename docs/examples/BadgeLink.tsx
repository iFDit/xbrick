import * as React from 'react'
import { Badge } from 'xbrick'

const Example = () => {
  return (
    <>
      <Badge bstype="primary" link>primary</Badge>
      <Badge bstype="secondary" link>Secondary</Badge>
      <Badge bstype="warning" link>Warning</Badge>
      <Badge bstype="success" link>Success</Badge>
      <Badge bstype="danger" link>Danger</Badge>
      <Badge bstype="info" link>Info</Badge>
      <Badge bstype="light" link>Light</Badge>
      <Badge bstype="dark" link>Dark</Badge>
    </>
  )
}

export default Example
