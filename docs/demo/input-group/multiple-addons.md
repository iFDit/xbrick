
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { InputGroup, Input, InputGropAddon, InputGroupText } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <InputGroup>
    <InputGroupText>
      $
    </InputGroupText>
    <InputGroupText>
      0.00
    </InputGroupText>
    <Input />
  </InputGroup>
, document.getElementById('root'))
````
