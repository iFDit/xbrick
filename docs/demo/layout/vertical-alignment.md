垂直对齐方式

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Container className="doc-layout-example-container">
    <Row xs={{ align: 'start' }} style={{height: '10rem', backgroundColor: '#eee'}}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row xs={{ align: 'center' }} style={{height: '10rem', backgroundColor: '#eee'}}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row xs={{ align: 'end' }} style={{height: '10rem', backgroundColor: '#eee'}}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row style={{height: '10rem', backgroundColor: '#eee'}}>
      <Col xs={{ align: 'start' }}>One of three columns</Col>
      <Col xs={{ align: 'center' }}>One of three columns</Col>
      <Col xs={{ align: 'end' }}>One of three columns</Col>
    </Row>
  </Container>
, document.getElementById('root'))
````
