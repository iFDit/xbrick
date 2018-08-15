搭配 `Badge` 组件使用

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ListGroup, ListGroupItem, Row, Col } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <ListGroup>
    <ListGroupItem>
      <Row xs={{justify: 'between'}}>
        <Col>Cras justo odio</Col>
        <Col xs={{align: 'center'}}><Badge pill>14</Badge></Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row xs={{justify: 'between'}}>
        <Col>Dapibus ac facilisis in</Col>
        <Col xs={{align: 'center'}}><Badge pill>14</Badge></Col>
      </Row>
    </ListGroupItem>
    <ListGroupItem>
      <Row xs={{justify: 'between'}}>
        <Col>Morbi leo risus</Col>
        <Col xs={{align: 'center'}}><Badge pill>14</Badge></Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
, document.getElementById('root'))
````
