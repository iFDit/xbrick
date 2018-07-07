import * as React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'xbrick'

const Example = () => {
  return (
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
      <FormGroup>
        <Label htmlFor="select">Select</Label>
        <Input type="select" id="select"> 
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Input type="radio" name="radio1" label="Option one is this and that—be sure to include why it's great" />
        </FormGroup>
        <FormGroup check>
          <Input type="radio" name="radio1" label="Option two can be something else and selecting it will deselect option one" />
        </FormGroup>
        <FormGroup check disabled>
          <Input type="radio" name="radio1" label="Option three is disabled" disabled/>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Input id="check" type="checkbox" label="Check me out"/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default Example
