

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { SplitDropdown, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Fragment>
    <SplitDropdown>
      <Button>primary</Button>
      <SplitDropdown.Toggle button split/>
      <SplitDropdown.Menu>
        <SplitDropdown.Item>Action</SplitDropdown.Item>
        <SplitDropdown.Item>Another action</SplitDropdown.Item>
        <SplitDropdown.Item>Something else here</SplitDropdown.Item>
      </SplitDropdown.Menu>
    </SplitDropdown>
    <SplitDropdown >
      <Button color="secondary">secondary</Button>
      <SplitDropdown.Toggle color="secondary" button split/>
      <SplitDropdown.Menu>
        <SplitDropdown.Item>Action</SplitDropdown.Item>
        <SplitDropdown.Item>Another action</SplitDropdown.Item>
        <SplitDropdown.Item>Something else here</SplitDropdown.Item>
      </SplitDropdown.Menu>
    </SplitDropdown>
    <SplitDropdown >
      <Button color="success">success</Button>
      <SplitDropdown.Toggle color="success" button split/>
      <SplitDropdown.Menu>
        <SplitDropdown.Item>Action</SplitDropdown.Item>
        <SplitDropdown.Item>Another action</SplitDropdown.Item>
        <SplitDropdown.Item>Something else here</SplitDropdown.Item>
      </SplitDropdown.Menu>
    </SplitDropdown>
    <SplitDropdown >
      <Button color="info">info</Button>
      <SplitDropdown.Toggle color="info" button split/>
      <SplitDropdown.Menu>
        <SplitDropdown.Item>Action</SplitDropdown.Item>
        <SplitDropdown.Item>Another action</SplitDropdown.Item>
        <SplitDropdown.Item>Something else here</SplitDropdown.Item>
      </SplitDropdown.Menu>
    </SplitDropdown>
    <SplitDropdown >
      <Button color="warning">warning</Button>
      <SplitDropdown.Toggle color="warning" button split/>
      <SplitDropdown.Menu>
        <SplitDropdown.Item>Action</SplitDropdown.Item>
        <SplitDropdown.Item>Another action</SplitDropdown.Item>
        <SplitDropdown.Item>Something else here</SplitDropdown.Item>
      </SplitDropdown.Menu>
    </SplitDropdown>
    <SplitDropdown >
      <Button color="danger">danger</Button>
      <SplitDropdown.Toggle color="danger" button split/>
      <SplitDropdown.Menu>
        <SplitDropdown.Item>Action</SplitDropdown.Item>
        <SplitDropdown.Item>Another action</SplitDropdown.Item>
        <SplitDropdown.Item>Something else here</SplitDropdown.Item>
      </SplitDropdown.Menu>
    </SplitDropdown>
  </Fragment>
, document.getElementById('root'))
````
