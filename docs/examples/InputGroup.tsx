import * as React from 'react'
import { InputGroup, Input, InputGroupAddon, InputGroupText } from 'xbrick'

const Example = () => {
  return (
    <>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placehold="Username" />
      </InputGroup>
      <InputGroup>
        <Input placehold="Recipient's username" />
        <InputGroupAddon append>
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input />
        <InputGroupAddon append>
          <InputGroupText>.00</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </>
  )
}

export default Example
