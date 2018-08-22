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
    <Alert className={`${ALERT} ${PRIMARY}`}>
      This is a primary alert with a{` `}
      <AlertLink href="#" className={LINK}>
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert className={`${ALERT} ${SECONDARY}`}>
      This is a secondary alert with a{` `}
      <AlertLink href="#" className={LINK}>
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert className={`${ALERT} ${SUCCESS}`}>
      This is a success alert with a{` `}
      <AlertLink href="#" className={LINK}>
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert className={`${ALERT} ${DANGER}`}>
      This is a danger alert with a{` `}
      <AlertLink href="#" className={LINK}>
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert className={`${ALERT} ${WARNING}`}>
      This is a warning alert with a{` `}
      <AlertLink href="#" className={LINK}>
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert className={`${ALERT} ${INFO}`}>
      This is a info alert with a{` `}
      <AlertLink href="#" className={LINK}>
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert className={`${ALERT} ${LIGHT}`}>
      This is a light alert with a{` `}
      <AlertLink href="#" className={LINK}>
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
    <Alert className={`${ALERT} ${DARK}`}>
      This is a dark alert with a{` `}
      <AlertLink href="#" className={LINK}>
        an example link
      </AlertLink>. Give it a click if you like.
    </Alert>
  </div>
, document.getElementById('root'))
````