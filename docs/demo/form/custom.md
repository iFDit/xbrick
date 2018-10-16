Custom样式的Input

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Form, FormGroup, Label, CustomInput, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Form>
    <FormGroup>
      <Label>
        Select
        <CustomInput type="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </CustomInput>
      </Label>
    </FormGroup>
    <FormGroup check>
      <CustomInput type="checkbox" label="1" name="c" inline/>
      <CustomInput type="checkbox" label="2" name="c" inline/>
      <CustomInput type="checkbox" label="3" name="c" inline/>
    </FormGroup>
    <FormGroup check>
      <CustomInput type="radio" label="1" name="r" inline/>
      <CustomInput type="radio" label="2" name="r" inline/>
      <CustomInput type="radio" label="3" name="r" inline/>
    </FormGroup>
    <Button>Submit</Button>
  </Form>
, document.getElementById('root'))
````
