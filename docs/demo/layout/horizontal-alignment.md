水平对齐

````jsx
import { Container, Row, Col } from 'xbrick'

ReactDOM.render(
  <Container>
    <Row xs={{ justify: 'start' }}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row xs={{ justify: 'center' }}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row xs={{ justify: 'end' }}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row xs={{ justify: 'around' }}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
    <Row xs={{ justify: 'between' }}>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
      <Col>One of three columns</Col>
    </Row>
  </Container>
, rootNode)
````

