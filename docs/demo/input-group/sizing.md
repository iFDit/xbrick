
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { InputGroup, Input, InputGropAddon, InputGroupText } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Fragment>
    <InputGroup size="small">
      <InputGroupAddon>
        <InputGroupText>small</InputGroupText>
      </InputGroupAddon>
      <Input placehold="Username"/>
    </InputGroup>
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>middle</InputGroupText>
      </InputGroupAddon>
      <Input placehold="Username"/>
    </InputGroup>
    <InputGroup size="large">
      <InputGroupAddon>
        <InputGroupText>large</InputGroupText>
      </InputGroupAddon>
      <Input placehold="Username"/>
    </InputGroup>
  </Fragment>
, document.getElementById('root'))
````
