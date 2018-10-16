列表项激活状态

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ListGroup, ListGroupItem } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <ListGroup>
    <ListGroupItem active>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
, document.getElementById('root'))
````