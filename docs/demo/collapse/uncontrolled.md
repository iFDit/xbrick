
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { UncontrolledCollapse } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <UncontrolledCollapse defaultOpen={true}>
    {({ toggle }) => (
      <p onClick={() => toggle()}>some text in here, and can be hidden by click me.</p>
    )}
  </UncontrolledCollapse>
, document.getElementById('root'))
````
