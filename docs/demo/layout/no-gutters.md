
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Container className="doc-layout-example-container">
    <Row noGutter>
      <Col xs="12" sm="6" md="8">.col-12 .col-sm-6 .col-md-8</Col>
      <Col xs="6" md="4">.col-6 .col-md-4</Col>
    </Row>
  </Container>
, document.getElementById('root'))

````
