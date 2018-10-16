设置 `Container` 宽度满屏

````jsx
import { Container, Row, Col } from 'xbrick'

ReactDOM.render(
  <Container fluid className="doc-layout-example-container">
    <Row>
      <Col sm style={{border: '1px solid #aaa'}}>One of three columns</Col>
      <Col sm style={{border: '1px solid #aaa'}}>One of three columns</Col>
      <Col sm style={{border: '1px solid #aaa'}}>One of three columns</Col>
    </Row>
  </Container>
, rootNode)
````
