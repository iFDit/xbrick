基本用法

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Form, FormGroup, Input, Label, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Form>
    <FormGroup>
      <Label>
        Email
        <Input placeholder="example@mail.com"/>
      </Label>
    </FormGroup>
    <FormGroup>
      <Label>
        Password
        <Input type="password" placeholder="Password"/>
      </Label>
    </FormGroup>
    <FormGroup>
      <Label>
        Select
        <Input type="select" defaultValue="1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Input>
      </Label>
    </FormGroup>
    <FormGroup>
      <Label>
        Multiple  Select
        <Input type="select" defaultValue={['1']} multiple>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Input>
      </Label>
    </FormGroup>
    <FormGroup>
      <Label>
        Text Area
        <Input type="textarea"/>
      </Label>
    </FormGroup>
    <FormGroup>
      <Label>
        File
        <Input type="file"/>
      </Label>
    </FormGroup>
    <FormGroup tag="fieldset">
      <legend>Radio Buttons</legend>
      <FormGroup check>
        <Input type="radio" name="rd1" label="Option one is this and that—be sure to include why it's great"/>
      </FormGroup>
      <FormGroup check>
        <Input type="radio" name="rd1" label="Option two can be something else and selecting it will deselect option one"/>
      </FormGroup>
      <FormGroup check>
        <Input type="radio" name="rd1" label="Option three is disabled" disabled/>
      </FormGroup>
      <FormGroup check>
        <Input type="radio" name="rd1" label="Option one is this and that—be sure to include why it's great"/>
      </FormGroup>
    </FormGroup>
    <FormGroup check>
      <Input type="checkbox" label="Check me out"/>
    </FormGroup>
    <Button bstype="secondary">Submit</Button>
  </Form>
, document.getElementById('root'))
````
