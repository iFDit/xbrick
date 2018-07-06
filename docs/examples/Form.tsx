import * as React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'xbrick'

const Example = () => {
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="email">Email address</Label>
        <Input id="email" />
        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </FormGroup>
      <FormGroup check>
        <Input id="check" type="checkbox" />
        <Label htmlFor="check" checkbox>Check me out</Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default Example
