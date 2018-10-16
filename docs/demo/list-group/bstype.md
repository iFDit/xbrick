使用 `bstype` 属性 

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ListGroup, ListGroupItem } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <ListGroup>
    <ListGroupItem tag="a" href="#" color="primary" dynamic>Cras justo odio</ListGroupItem>
    <ListGroupItem tag="a" href="#" color="secondary" dynamic>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem tag="a" href="#" color="warning" dynamic>Morbi leo risus</ListGroupItem>
    <ListGroupItem tag="a" href="#" color="success" dynamic>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem tag="a" href="#" color="danger" dynamic>Vestibulum at eros</ListGroupItem>
    <ListGroupItem tag="a" href="#" color="info" dynamic>Vestibulum at eros</ListGroupItem>
    <ListGroupItem tag="a" href="#" color="light" dynamic>Vestibulum at eros</ListGroupItem>
    <ListGroupItem tag="a" href="#" color="dark" dynamic>Vestibulum at eros</ListGroupItem>
  </ListGroup>
, document.getElementById('root'))
````
