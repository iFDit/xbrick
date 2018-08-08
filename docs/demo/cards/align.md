文本对其

可以设置文本左对齐，右对齐和居中对齐，默认是左对齐。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardBody, CardTitle, CardText, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <>
    <Card>
      <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>detail</Button>
      </CardBody>
    </Card>
    <Card align="center">
    <CardBody>
      <CardTitle>Special title treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>detail</Button>
    </CardBody>
  </Card>
  <Card align="right">
    <CardBody>
      <CardTitle>Special title treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>detail</Button>
    </CardBody>
  </Card>
  </>
, document.getElementById('root'))
````
