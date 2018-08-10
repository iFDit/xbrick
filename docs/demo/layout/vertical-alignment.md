垂直对齐方式

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Container>
    <Row xs={{ align: 'start' }}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row xs={{ align: 'center' }}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row xs={{ align: 'end' }}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row>
      <Col xs={{ align: 'start' }}>One of three columns</Col>
      <Col xs={{ align: 'center' }}>One of three columns</Col>
      <Col xs={{ align: 'end' }}>One of three columns</Col>
    </Row>
  </Container>
, document.getElementById('root'))
````
