Outline Button

设置outline为 `true` 将按钮背景为透明，可以用在有背景色的地方。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div>
    <Button outline>Primary</Button>
    <Button color="secondary" outline>secondary</Button>
    <Button color="success" outline>success</Button>
    <Button color="danger" outline>danger</Button>
    <Button color="warning" outline>warning</Button>
    <Button color="info" outline>info</Button>
    <Button color="light" outline>light</Button>
    <Button color="dark" outline>dark</Button>
    <Button color="link" outline>link</Button>
  </div>
, document.getElementById('root'))
````
