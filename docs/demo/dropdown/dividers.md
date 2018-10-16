
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { DropdownItem, DropdownMenu } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <DropdownMenu open={true} style={{position: 'static'}}>
    <DropdownItem header>Dropdown header</DropdownItem>
    <DropdownItem href="#">Action</DropdownItem>
    <DropdownItem href="#">Another action</DropdownItem>
    <DropdownItem href="#">Something else here</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem href="#">Separated link</DropdownItem>
  </DropdownMenu>
, document.getElementById('root'))
````
