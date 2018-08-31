
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardTitle, CardText, CardImg, CardBody } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Card>
    <CardImg src={overlayImage.replace(/[\r\n]/g, '')} />
    <CardBody overlay>
      <CardTitle>Card title</CardTitle>
      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
      <CardText>Last updated 3 mins ago</CardText>
    </CardBody>
  </Card>
, document.getElementById('root'))
````
