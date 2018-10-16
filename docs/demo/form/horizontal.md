`Form` 水平布局

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Form, FormGroup, Input, Label, Button, Row, Col } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Form>
    <FormGroup row>
      <Col nowrap sm="3"><Label htmlFor="email" col>Email</Label></Col>
      <Col sm="9"><Input id="email" placehold="Email" /></Col>
    </FormGroup>
    <FormGroup row>
      <Col nowrap sm="3"><Label htmlFor="password" col>Password</Label></Col>
      <Col sm="9"><Input id="password" placehold="Password" type="password" /></Col>
    </FormGroup>
    <FormGroup tag="fieldset">
      <Row>
        <Col nowrap xs="3"><legend style={{fontSize: 14}}>Radios</legend></Col>
        <Col xs="9">
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
    </FormGroup>
    <Button bstype="secondary">Sign in</Button>
  </Form>
, document.getElementById('root'))
````
