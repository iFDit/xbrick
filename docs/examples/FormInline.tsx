import * as React from 'react'
import { Form, FormGroup, Input, Button } from 'xbrick'

const Example = () => {
  return (
    <Form inline>
      <FormGroup>
        <Input value="email@example.com" readOnly plainText />
      </FormGroup>
      <FormGroup>
        <Input placehold="Password" type="password" />
      </FormGroup>
      <Button>Confirm</Button>
    </Form>
  )
}

export default Example
