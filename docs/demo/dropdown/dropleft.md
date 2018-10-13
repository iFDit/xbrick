

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Dropdown direction="left" style={{marginLeft: 200, display: 'inline-block'}}>
    <Dropdown.Toggle button color="secondary">
      Dropleft
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
, document.getElementById('root'))
````
