网格布局基本用法

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Container className="doc-layout-example-container">
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
, document.getElementById('root'))

````
