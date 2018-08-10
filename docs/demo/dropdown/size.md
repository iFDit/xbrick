

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
 <>
    <Dropdown>
      <DropdownToggle button bstype="secondary" size="large">
        Large button
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown>
      <DropdownToggle button bstype="secondary">
        Middle button
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown>
      <DropdownToggle button bstype="secondary" size="small">
        Small button
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </>
, document.getElementById('root'))
````
