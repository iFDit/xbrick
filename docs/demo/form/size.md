改变 `Input` 组件的大小。

````jsx
import { Form, FormGroup, Input } from 'xbrick'

ReactDOM.render(
  <Form>
    <FormGroup>
      <Input size="large" placeholder="form-control-lg" />
    </FormGroup>
    <FormGroup>
      <Input size="middle" placeholder="Default input" />
    </FormGroup>
    <FormGroup>
      <Input size="small" placeholder="form-control-sm" />
    </FormGroup>
    <FormGroup>
      <Input type="select" size="large">
        <option>large select</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Input type="select" size="middle">
        <option>large select</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Input type="select" size="small">
        <option>large select</option>
      </Input>
    </FormGroup>
  </Form>
, rootNode)
````
