几种预定义类型的按钮，每种类型包含不同的语义。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Button>primary</Button>
    <Button color="secondary">secondary</Button>
    <Button color="secondary">secondary</Button>
    <Button color="success">success</Button>
    <Button color="danger">danger</Button>
    <Button color="warning">warning</Button>
    <Button color="info">info</Button>
    <Button color="light">light</Button>
    <Button color="dark">dark</Button>
    <Button color="link">link</Button>
  </div>
, document.getElementById('root'))
````