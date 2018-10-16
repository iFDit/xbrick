
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { InputGroup, Input, InputGroupAddon, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <InputGroup>
    <InputGroupAddon>
      <Button color="secondary">Button</Button>
    </InputGroupAddon>
    <Input />
  </InputGroup>
, document.getElementById('root'))
````
