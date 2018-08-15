使用 `bstype` 属性 

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ListGroup, ListGroupItem } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <ListGroup>
    <ListGroupItem tag="a" href="#" bstype="primary">Cras justo odio</ListGroupItem>
    <ListGroupItem tag="a" href="#" bstype="secondary">Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem tag="a" href="#" bstype="warning">Morbi leo risus</ListGroupItem>
    <ListGroupItem tag="a" href="#" bstype="success">Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem tag="a" href="#" bstype="danger">Vestibulum at eros</ListGroupItem>
    <ListGroupItem tag="a" href="#" bstype="info">Vestibulum at eros</ListGroupItem>
    <ListGroupItem tag="a" href="#" bstype="light">Vestibulum at eros</ListGroupItem>
    <ListGroupItem tag="a" href="#" bstype="dark">Vestibulum at eros</ListGroupItem>
  </ListGroup>
, document.getElementById('root'))
````
