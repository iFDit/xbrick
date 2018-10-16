`inline` 布局

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Form, FormGroup, Label, Input, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Form inline>
    <FormGroup>
      <Input value="email@example.com" readOnly plainText />
    </FormGroup>
    <FormGroup>
      <Input placehold="Password" type="password" />
    </FormGroup>
    <Button>Confirm</Button>
  </Form>
, document.getElementById('root'))
````
