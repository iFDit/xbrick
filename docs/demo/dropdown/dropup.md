

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Dropdown direction="up" style={{marginTop: 200}}>
    <Dropdown.Toggle button color="secondary">
      Dropup
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
, document.getElementById('root'))
````
