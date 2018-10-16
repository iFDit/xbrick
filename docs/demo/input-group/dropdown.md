
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { InputGroup, Input, Dropdown, InputGroupAddon, InputGroupAddonStyles } from 'xbrick'
import 'xbrick/lib/style/index.css'

const { prepend } = InputGroupAddonStyles

ReactDOM.render(
  <InputGroup>
    <Dropdown className={prepend}>
      <Dropdown.Toggle color="secondary" button>Dropdown</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Item divider/>
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Input />
  </InputGroup>
, document.getElementById('root'))
````
