水平对齐

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Container>
    <Row xs={{ justify: 'start' }}>
      <Col xs={{col: 4}}>One of three columns</Col>
      <Col xs={{col: 4}}>One of three columns</Col>
    </Row>
    <Row xs={{ justify: 'center' }}>
      <Col xs={{col: 4}}>One of three columns</Col>
      <Col xs={{col: 4}}>One of three columns</Col>
    </Row>
    <Row xs={{ justify: 'end' }}>
      <Col xs={{col: 4}}>One of three columns</Col>
      <Col xs={{col: 4}}>One of three columns</Col>
    </Row>
    <Row xs={{ justify: 'around' }}>
      <Col xs={{col: 4}}>One of three columns</Col>
      <Col xs={{col: 4}}>One of three columns</Col>
    </Row>
    <Row xs={{ justify: 'between' }}>
      <Col xs={{col: 4}}>One of three columns</Col>
      <Col xs={{col: 4}}>One of three columns</Col>
    </Row>
  </Container>
, document.getElementById('root'))
````

