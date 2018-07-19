import * as React from 'react'
import { ListGroup, ListGroupItem, Row } from 'xbrick'

const Example = () => {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#" action active>
        <Row xs={{justify: 'between'}} noGutter>
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </Row>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" action>
        <Row xs={{justify: 'between'}} noGutter>
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </Row>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" action>
        <Row xs={{justify: 'between'}} noGutter>
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </Row>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </ListGroupItem>
    </ListGroup>
  )
}

export default Example
