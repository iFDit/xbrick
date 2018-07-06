基本用法

````jsx
import { Form, FormGroup, Label, Input, Button } from 'xbrick'

ReactDOM.render(
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
      <Label htmlFor="check" checkbox>Check me out</Label>
      <Input id="check" type="checkbox" />
    </FormGroup>
    <Button>Submit</Button>
  </Form>
, rootNode)
````
