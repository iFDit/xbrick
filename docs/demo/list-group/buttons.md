
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ListGroup, ListGroupItem } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <ListGroup>
    <ListGroupItem tag="button" dynamic>Cras justo odio</ListGroupItem>
    <ListGroupItem tag="button" dynamic>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem tag="button" dynamic>Morbi leo risus</ListGroupItem>
    <ListGroupItem tag="button" dynamic>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem tag="button" dynamic disabled>Vestibulum at eros</ListGroupItem>
  </ListGroup>
, document.getElementById('root'))
````
