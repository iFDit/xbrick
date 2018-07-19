import * as React from 'react'
import { ListGroup, ListGroupItem, Row, Col, Badge } from 'xbrick'

const Example = () => {
  return (
    <ListGroup>
      <ListGroupItem>
        <Row xs={{justify: 'between'}} noGutter>
          Cras justo odio
          <Col xs="2" style={{textAlign: 'right'}}><Badge pill>14</Badge></Col>
        </Row>
      </ListGroupItem>
      <ListGroupItem>
        <Row xs={{justify: 'between'}} noGutter>
          Dapibus ac facilisis in
          <Col xs="2" style={{textAlign: 'right'}}><Badge pill>2</Badge></Col>
        </Row>
      </ListGroupItem>
      <ListGroupItem>
        <Row xs={{justify: 'between'}} noGutter>
          Morbi leo risus
          <Col xs="2" style={{textAlign: 'right'}}><Badge pill>1</Badge></Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  )
}

export default Example
