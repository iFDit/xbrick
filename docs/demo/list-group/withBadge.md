搭配 `Badge` 组件使用

````jsx
import { ListGroup, ListGroupItem, Badge } from 'xbrick'

ReactDOM.render(
  <ListGroup>
    <ListGroupItem>
      <Row xs={{justify: 'between'}}>
        <Col>Cras justo odio</Col>
        <Col xs={{align: 'center'}}><Badge>14</Badge></Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row xs={{justify: 'between'}}>
        <Col>Dapibus ac facilisis in</Col>
        <Col xs={{align: 'center'}}><Badge>14</Badge></Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row xs={{justify: 'between'}}>
        <Col>Morbi leo risus</Col>
        <Col xs={{align: 'center'}}><Badge>14</Badge></Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
, rootNode)
````
