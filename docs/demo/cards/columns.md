列

使用 `CardColumns` 将多个卡片从上到下，从左到右组合在一起。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardBody, CardTitle, CardText, CardColumns } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <CardColumns>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>content</CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        </CardBody>
      </Card>
      <Card inverse bstype="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
  </CardColumns>
, document.getElementById('root'))
````
