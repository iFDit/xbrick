

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Fragment>
    <Dropdown btnGroup>
      <Button>primary</Button>
      <DropdownToggle button split/>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown btnGroup>
      <Button bstype="secondary">secondary</Button>
      <DropdownToggle bstype="secondary" button split/>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown btnGroup>
      <Button bstype="success">success</Button>
      <DropdownToggle bstype="success" button split/>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown btnGroup>
      <Button bstype="info">info</Button>
      <DropdownToggle bstype="info" button split/>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown btnGroup>
      <Button bstype="warning">warning</Button>
      <DropdownToggle bstype="warning" button split/>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown btnGroup>
      <Button bstype="danger">danger</Button>
      <DropdownToggle bstype="danger" button split/>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </Fragment>
, document.getElementById('root'))
````
