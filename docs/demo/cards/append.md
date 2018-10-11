头部和脚部信息

通过 `CardHeader` 和 `CardFooter` 来展示卡片的头部和脚部信息。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardBody, CardTitle, CardText, CardHeader, CardFooter, CardLink } from 'xbrick'
import 'xbrick/lib/style/index.css'


ReactDOM.render(
  <Card>
    <CardHeader>Header</CardHeader>
    <CardBody>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <CardLink href="#">Go somewhere</CardLink>
    </CardBody>
    <CardFooter>footer</CardFooter>
  </Card>
, document.getElementById('root'))
````
