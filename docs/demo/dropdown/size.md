

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
 <Fragment>
    <Dropdown>
      <Dropdown.Toggle button color="secondary" size="large">
        Large button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle button color="secondary">
        Middle button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle button color="secondary" size="small">
        Small button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Fragment>
, document.getElementById('root'))
````
