基本用法

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Dropdown>
    <Dropdown.Toggle button bstype="secondary">
      Dropdown button
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
, document.getElementById('root'))
````
