import * as React from 'react'
import { Form, FormGroup, Input, Button, Label, Row, Col } from 'xbrick'

const Example = () => {
  return (
    <Form>
      <FormGroup row>
        <Col nowrap sm="2"><Label htmlFor="email">Email</Label></Col>
        <Col sm="10"><Input id="email" placehold="Email" /></Col>
      </FormGroup>
      <FormGroup row>
        <Col nowrap sm="2"><Label htmlFor="password">Password</Label></Col>
        <Col sm="10"><Input id="password" placehold="Password" type="password" /></Col>
      </FormGroup>
      <FormGroup tag="fieldset">
        <Row>
          <Col nowrap sm="2"><legend className="col-form-label col-sm-2">Radio Buttons</legend></Col>
          <Col sm="10">
            <FormGroup check>
              <Input type="radio" label="First radio" name="rd" />
            </FormGroup>
            <FormGroup check>
              <Input type="radio" label="Second radio" name="rd" />
            </FormGroup>
            <FormGroup check>
              <Input type="radio" label="Third disabled radio" name="rd" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup row>
          <Col sm="2">Checkbox</Col>
          <Col sm="10"><FormGroup check><Input id="checkbox" type="checkbox" label="checkbox"/></FormGroup></Col>
        </FormGroup>
      </FormGroup>
      <Button>Sign in</Button>
    </Form>
  )
}

export default Example
