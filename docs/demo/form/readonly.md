通过`readonly`属性和`plainText`设置只读

````jsx
import { Form, FormGroup, Input } from 'xbrick'

ReactDOM.render(
  <Form>
    <FormGroup>
      <Input placeholder="Readonly input here..." readonly />
    </FormGroup>
    <FormGroup>
      <Input placeholder="Readonly input here..." plainText readonly />
    </FormGroup>
  </Form>
, rootNode)
````
