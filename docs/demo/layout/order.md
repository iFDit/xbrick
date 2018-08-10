列排序

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Container>
    <Row>
      <Col xs>First, but unordered</Col>
      <Col xs={{ order: 12, col: 0 }}>Second, but last</Col>
      <Col xs={{ order: 1, col: 0 }}>Third, but first</Col>
    </Row>
  </Container>
, document.getElementById('root'))
````
