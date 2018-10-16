`input-group` 基本用法

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { InputGroup, Input, InputGroupAddon, InputGroupText } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <InputGroup>
    <InputGroupAddon>
      <InputGroupText>@</InputGroupText>
    </InputGroupAddon>
    <Input placehold="Username" />
  </InputGroup>
, document.getElementById('root'))
````
