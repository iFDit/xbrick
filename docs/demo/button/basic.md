几种预定义类型的按钮，每种类型包含不同的语义。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Button>primary</Button>
    <Button bstype="secondary">secondary</Button>
    <Button bstype="secondary">secondary</Button>
    <Button bstype="success">success</Button>
    <Button bstype="danger">danger</Button>
    <Button bstype="warning">warning</Button>
    <Button bstype="info">info</Button>
    <Button bstype="light">light</Button>
    <Button bstype="dark">dark</Button>
    <Button bstype="link">link</Button>
  </div>
, document.getElementById('root'))
````