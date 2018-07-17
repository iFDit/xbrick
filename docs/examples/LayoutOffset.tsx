import * as React from 'react'
import { Container, Row, Col } from 'xbrick'

const Example = () => {
  return (
    <Container>
      <Row>
        <Col md="4">col-md-4</Col>
        <Col md={{ col: 4, offset: 3 }}>col-md-4</Col>
      </Row>
    </Container>
  )
}

export default Example
