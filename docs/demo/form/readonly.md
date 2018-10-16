通过`readonly`属性和`plainText`设置只读

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Form, FormGroup, Input } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Form>
    <FormGroup>
      <Input placeholder="Readonly input here..." readOnly />
    </FormGroup>
  </Form>
, document.getElementById('root'))
````
