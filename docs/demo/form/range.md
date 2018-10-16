
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Form, FormGroup, Input } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Form>
    <FormGroup>
      <Input type="range" label="Range input" />
    </FormGroup>
  </Form>
, document.getElementById('root'))
````
