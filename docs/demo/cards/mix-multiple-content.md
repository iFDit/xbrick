

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardTitle, CardBody, CardText, CardImg, CardLink, ListGroup, ListGroupItem } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Card>
    <CardImg src={data.imageSrc.replace(/[\r\n]/g, '')} />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
    </CardBody>
    <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    <CardBody>
      <CardLink href="#">Card link</CardLink>
      <CardLink href="#">Another link</CardLink>
    </CardBody>
  </Card>
, document.getElementById('root'))
````
