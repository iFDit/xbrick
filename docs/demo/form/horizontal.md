`Form` 水平布局

````jsx
import { Form, FormGroup, Input, Label, Button, Row, Col } from 'xbrick'

ReactDOM.render(
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
          <Input type="radio" label="Second radio" name="rd" />
          <Input type="radio" label="Third disabled radio" name="rd" />
        </FormGroup>
      </Col>
    </FormGroup>
    <Button>Sign in</Button>
  </Form>
, rootNode)
````
