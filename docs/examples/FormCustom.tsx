import * as React from 'react'
import { Form, FormGroup, CustomInput, Button } from 'xbrick'

const Example = () => {
  return (
    <Form>
      <FormGroup>
        <CustomInput type="select" label="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </CustomInput>
      </FormGroup>
      <FormGroup check>
        <CustomInput type="checkbox" label="1" name="c" />
        <CustomInput type="checkbox" label="2" name="c" />
        <CustomInput type="checkbox" label="3" name="c" />
      </FormGroup>
      <FormGroup check>
        <CustomInput type="radio" label="1" name="r" inline/>
        <CustomInput type="radio" label="2" name="r" inline/>
        <CustomInput type="radio" label="3" name="r" inline/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default Example
