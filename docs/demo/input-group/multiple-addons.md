
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { InputGroup, Input, InputGroupAddon, InputGroupText } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <InputGroup>
    <InputGroupAddon>
      <InputGroupText>
        $
      </InputGroupText>
      <InputGroupText>
        0.00
      </InputGroupText>
    </InputGroupAddon>
    <Input />
  </InputGroup>
, document.getElementById('root'))
````
