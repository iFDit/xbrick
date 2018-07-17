import * as React from 'react'
import { Container, Row, Col } from 'xbrick'

const Example = () => {
  return (
    <Container>
      <Row xs={{ align: 'start' }} style={{ minHeight: '10rem', background: 'rgba(255,0,0,.1)', marginBottom: 10 }}>
        <Col style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col style={{border: '1px solid #aaa'}}>One of three columns</Col>
      </Row>
      <Row xs={{ align: 'center' }} style={{ minHeight: '10rem', background: 'rgba(255,0,0,.1)', marginBottom: 10 }}>
        <Col style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col style={{border: '1px solid #aaa'}}>One of three columns</Col>
      </Row>
      <Row xs={{ align: 'end' }} style={{ minHeight: '10rem', background: 'rgba(255,0,0,.1)', marginBottom: 10 }}>
        <Col style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col style={{border: '1px solid #aaa'}}>One of three columns</Col>
      </Row>
      <Row style={{ minHeight: '10rem', background: 'rgba(255,0,0,.1)', marginBottom: 10 }}>
        <Col xs={{ col: 0, align: 'start' }} style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col xs={{ col: 0, align: 'center' }} style={{border: '1px solid #aaa'}}>One of three columns</Col>
        <Col xs={{ col: 0, align: 'end' }} style={{border: '1px solid #aaa'}}>One of three columns</Col>
      </Row>
    </Container>
  )
}

export default Example
