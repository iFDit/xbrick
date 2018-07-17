import * as React from 'react'
import { Container, Row, Col } from 'xbrick'

const Example = () => {
  return (
    <Container>
      <Row xs={{ justify: 'start' }}>
        <Col xs="4" style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col xs="4" style={{border: '1px solid #aaa'}}>One of three columns</Col>
      </Row>
      <Row xs={{ justify: 'center' }}>
        <Col xs="4" style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col xs="4" style={{border: '1px solid #aaa'}}>One of three columns</Col>
      </Row>
      <Row xs={{ justify: 'end' }}>
        <Col xs="4" style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col xs="4" style={{border: '1px solid #aaa'}}>One of three columns</Col>
      </Row>
      <Row xs={{ justify: 'around' }}>
        <Col xs="4" style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col xs="4" style={{border: '1px solid #aaa'}}>One of three columns</Col>
      </Row>
      <Row xs={{ justify: 'between' }}>
        <Col xs="4" style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col xs="4" style={{border: '1px solid #aaa'}}>One of three columns</Col>
      </Row>
    </Container>
  )
}

export default Example
