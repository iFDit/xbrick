设置 `Col` 不同大小

````jsx
import { Container, Row, Col } from 'xbrick'

ReactDOM.render(
  <Container>
    <Row>
      <Col xs>1 of 2</Col>
      <Col xs>2 of 2</Col>
    </Row>
    <Row>
      <Col xs>1 of 3</Col>
      <Col xs>2 of 3</Col>
      <Col xs>3 of 3</Col>
    </Row>
    <Row>
      <Col xs>1 of 3</Col>
      <Col xs="6">2 of 3(wider-6)</Col>
      <Col xs>3 of 3</Col>
    </Row>
    <Row>
      <Col xs>1 of 3</Col>
      <Col xs="5">2 of 3(wider-5)</Col>
      <Col xs>3 of 3</Col>
    </Row>
    <Row>
      <Col xs lg="2">1 of 3</Col>
      <Col md="auto">Variable width content</Col>
      <Col xs lg="2">3 of 3</Col>
    </Row>
    <Row>
      <Col xs>1 of 3</Col>
      <Col md="auto">Variable width content</Col>
      <Col xs lg="2">3 of 3</Col>
    </Row>
    <Row>
      <Col xs>col</Col>
      <Col xs>col</Col>
      <Col xs>col</Col>
      <Col xs>col</Col>
    </Row>
    <Row>
      <Col xs="8">col-8</Col>
      <Col xs="4">col-4</Col>
    </Row>
    <Row>
      <Col sm="8">col-sm-8</Col>
      <Col sm="4">col-sm-4</Col>
    </Row>
    <Row>
      <Col sm>col-sm</Col>
      <Col sm>col-sm</Col>
      <Col sm>col-sm</Col>
    </Row>
  </Container>
, rootNode)
````
