`inline` 布局

````jsx
import { Form FormGroup, Label, Input, Button } from 'xbrick'

ReactDOM.render(
  <Form inline>
    <FormGroup>
      <Input value="email@example.com" readOnly plainText />
    </FormGroup>
    <FormGroup>
      <Input placehold="Password" type="password" />
    </FormGroup>
    <Button>Confirm</Button>
  </Form>
, rootNode)
````
