
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { InputGroup, Input, InputGropAddon, InputGroupText, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <InputGroup>
    <InputGroupText>
      <Button bstype="secondary">Button</Button>
    </InputGroupText>
    <Input />
  </InputGroup>
, document.getElementById('root'))
````
