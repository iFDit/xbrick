表单 `Form`

## 何时使用
用于创建数据收集，校验和提交功能的表单。

````jsx
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
````
