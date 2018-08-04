#AlertLink


````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Alert, AlertLink } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <div className="app">
    <Alert bstype="primary">
      This is a primary alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
    </Alert>
    <Alert bstype="secondary">
      This is a secondary alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
    </Alert>
    <Alert bstype="success">
      This is a success alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
    </Alert>
    <Alert bstype="danger">
      This is a danger alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
    </Alert>
    <Alert bstype="warning">
      This is a warning alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
    </Alert>
    <Alert bstype="info">
      This is a info alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
    </Alert>
    <Alert bstype="light">
      This is a light alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
    </Alert>
    <Alert bstype="dark">
      This is a dark alert with a <AlertLink href="#">an example link</AlertLink>.Give it a click if you like.
    </Alert>
  </div>
, document.getElementById('root'))
````