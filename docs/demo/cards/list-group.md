

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardHeader, ListGroup, ListGroupItem } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Card style={{width: '18rem'}}>
    <CardHeader>Featured</CardHeader>
    <ListGroup flush>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  </Card>
, document.getElementById('root'))
````
