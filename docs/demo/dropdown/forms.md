
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { DropdownItem, DropdownMenu, Form, FormGroup, Label, Input, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <DropdownMenu open={true} style={{position: 'static'}}>
    <Form className="px-4 py-3">
      <FormGroup>
        <Label>
          Email address
          <Input placeholder="email@example.com" />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          Password
          <Input type="password" placeholder="Password" />
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input id="check" type="checkbox" label="Remember me"/>
      </FormGroup>
      <Button>Sign in</Button>
    </Form>
    <DropdownItem divider/>
    <DropdownItem>New around here? Sign up</DropdownItem>
    <DropdownItem>Forgot password?</DropdownItem>
  </DropdownMenu>
, document.getElementById('root'))
````
