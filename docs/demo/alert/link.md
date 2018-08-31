#AlertLink


````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Alert, AlertLink, AlertStyles, ALertLinkStyles } from 'xbrick'
import 'xbrick/lib/style/index.css'

const { LINK } = ALertLinkStyles
const {
  ALERT,
  PRIMARY,
  SECONDARY,
  SUCCESS,
  DANGER,
  WARNING,
  INFO,
  LIGHT,
  DARK,
} = AlertStyles


ReactDOM.render(
  <div className="app">
    <Alert>
      This is a primary alert with a{` `}
      <AlertLink href="#">
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert color="secondary">
      This is a secondary alert with a{` `}
      <AlertLink href="#">
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert color="success">
      This is a success alert with a{` `}
      <AlertLink href="#">
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert color="danger">
      This is a danger alert with a{` `}
      <AlertLink href="#">
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert color="warning">
      This is a warning alert with a{` `}
      <AlertLink href="#">
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert color="info">
      This is a info alert with a{` `}
      <AlertLink href="#">
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert color="light">
      This is a light alert with a{` `}
      <AlertLink href="#">
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert color="dark">
      This is a dark alert with a{` `}
      <AlertLink href="#">
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
  </div>
, document.getElementById('root'))
````
