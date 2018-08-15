
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ListGroup, ListGroupItem } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <ListGroup>
    <ListGroupItem tag="button" action>Cras justo odio</ListGroupItem>
    <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
    <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem tag="button" action disabled>Vestibulum at eros</ListGroupItem>
  </ListGroup>
, document.getElementById('root'))
````
