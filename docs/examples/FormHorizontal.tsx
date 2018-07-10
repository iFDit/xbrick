import * as React from 'react'
import { Form, FormGroup, Input, Button } from 'xbrick'

const Example = () => {
  return (
    <Form>
      <FormGroup row>
        <Input placehold="Email" label="Email" />
      </FormGroup>
      <FormGroup row>
        <Input placehold="Password" label="Password" type="password" />
      </FormGroup>
      <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Radio Buttons</legend>
        <FormGroup check>
          <Input type="radio" label="First radio" name="rd" />
          <Input type="radio" label="Second radio" name="rd" />
          <Input type="radio" label="Third disabled radio" name="rd" />
        </FormGroup>
      </FormGroup>
      <Button>Sign in</Button>
    </Form>
  )
}

export default Example
