import * as React from 'react'
import { Badge } from 'xbrick'

const Example = () => {
  return (
    <>
      <Badge type="primary" link>primary</Badge>
      <Badge type="secondary" link>Secondary</Badge>
      <Badge type="warning" link>Warning</Badge>
      <Badge type="success" link>Success</Badge>
      <Badge type="danger" link>Danger</Badge>
      <Badge type="info" link>Info</Badge>
      <Badge type="light" link>Light</Badge>
      <Badge type="dark" link>Dark</Badge>
    </>
  )
}

export default Example
