基本使用方式，适用于面板，缩略图等展示。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardTitle, CardBody, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Card>
    <CardBody>
      <CardTitle>Word of the Day</CardTitle>
      <CardText>
        "a benevolent smile".
      </CardText>
      <Button bstype="light">LEARN MORE</Button>
    </CardBody>
  </Card>
, document.getElementById('root'))
````
