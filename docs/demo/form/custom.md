Custom样式的Input

````jsx
import { Form, FormGroup, Input, Button } from 'xbrick'

ReactDOM.render(
  <Form>
    <FormGroup>
      <Input type="select" custom label="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </Input>
    </FormGroup>
    <FormGroup check>
      <Input type="checkbox" label="1" name="c" />
      <Input type="checkbox" label="2" name="c" />
      <Input type="checkbox" label="3" name="c" />
    </FormGroup>
    <FormGroup check>
      <Input type="radio" label="1" name="r" />
      <Input type="radio" label="2" name="r" />
      <Input type="radio" label="3" name="r" />
    </FormGroup>
    <Button>Submit</Button>
  </Form>
, rootNode)
````
