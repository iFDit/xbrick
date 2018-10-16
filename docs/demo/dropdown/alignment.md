
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Dropdown style={{display: 'inline-block'}}>
    <Dropdown.Toggle button color="secondary">
      Right-aligned menu
    </Dropdown.Toggle>
    <Dropdown.Menu right>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
, document.getElementById('root'))
````
