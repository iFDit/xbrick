import * as React from 'react'
import { ListGroup, ListGroupItem } from 'xbrick'

const Example = () => {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#" action active>Cras justo odio</ListGroupItem>
      <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
      <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem tag="a" href="#" action disabled>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  )
}

export default Example
