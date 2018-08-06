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
    <Button bstype="secondary" outline>secondary</Button>
    <Button bstype="success" outline>success</Button>
    <Button bstype="danger" outline>danger</Button>
    <Button bstype="warning" outline>warning</Button>
    <Button bstype="info" outline>info</Button>
    <Button bstype="light" outline>light</Button>
    <Button bstype="dark" outline>dark</Button>
    <Button bstype="link" outline>link</Button>
  </div>
, document.getElementById('root'))
````
