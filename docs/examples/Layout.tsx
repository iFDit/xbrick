import * as React from 'react'
import { Container, Row, Col } from 'xbrick'

const Example = () => {
  return (
    <Container>
      <Row>
        <Col sm style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col sm style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col sm style={{border: '1px solid #aaa'}}>One of three columns</Col>
      </Row>
    </Container>
  )
}

export default Example
