

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Dropdown direction="left">
    <DropdownToggle button bstype="secondary">
      Dropleft
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another action</DropdownItem>
      <DropdownItem>Something else here</DropdownItem>
    </DropdownMenu>
  </Dropdown>
, document.getElementById('root'))
````
