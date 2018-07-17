import * as React from 'react'
import { Container, Row, Col } from 'xbrick'

const Example = () => {
  return (
    <Container>
      <Row>
        <Col xs>First, but unordered</Col>
        <Col xs={{ order: 12, col: 0 }}>Second, but last</Col>
        <Col xs={{ order: 1, col: 0 }}>Third, but first</Col>
      </Row>
    </Container>
  )
}

export default Example
