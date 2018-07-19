import * as React from 'react'
import { ListGroup, ListGroupItem } from 'xbrick'

const Example = () => {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#" bstype="primary" action>Cras justo odio</ListGroupItem>
      <ListGroupItem tag="a" href="#" bstype="secondary" action>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem tag="a" href="#" bstype="warning" action>Morbi leo risus</ListGroupItem>
      <ListGroupItem tag="a" href="#" bstype="success" action>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem tag="a" href="#" bstype="danger" action>Vestibulum at eros</ListGroupItem>
      <ListGroupItem tag="a" href="#" bstype="info" action>Vestibulum at eros</ListGroupItem>
      <ListGroupItem tag="a" href="#" bstype="light" action>Vestibulum at eros</ListGroupItem>
      <ListGroupItem tag="a" href="#" bstype="dark" action>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  )
}

export default Example
