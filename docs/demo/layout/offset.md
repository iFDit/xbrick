列偏移

````jsx
import { Container, Row, Col } from 'xbrick'

ReactDOM.render(
  <Container>
    <Row>
      <Col md="4">col-md-4</Col>
      <Col md={{ col: 4, offset: 3 }}>col-md-4</Col>
    </Row>
  </Container>
, rootNode)
````
