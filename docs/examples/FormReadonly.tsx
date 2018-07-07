import * as React from 'react'
import { Form, FormGroup, Input } from 'xbrick'

const Example = () => {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Readonly input here..." readOnly />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Readonly input here..." plainText readOnly />
      </FormGroup>
    </Form>
  )
}

export default Example
