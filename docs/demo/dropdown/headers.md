
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { DropdownMenu, DropdownItem } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <DropdownMenu open={true} style={{position: 'static'}}>
    <DropdownItem header>Dropdown header</DropdownItem>
    <DropdownItem>Action</DropdownItem>
    <DropdownItem>Another action</DropdownItem>
    <DropdownItem>Something else here</DropdownItem>
  </DropdownMenu>
, document.getElementById('root'))
````
