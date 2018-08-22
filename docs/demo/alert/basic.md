简单的用法，适用于任何文本长度的警告提示。


````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Alert, AlertStyles } from 'xbrick'
import 'xbrick/lib/style/index.css'

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
  <div>
    <Alert className={`${ALERT} ${PRIMARY}`}>
      This is a primary alert — check it out!
    </Alert>
    <Alert className={`${ALERT} ${SECONDARY}`}>
      This is a secondary alert — check it out!
    </Alert>
    <Alert className={`${ALERT} ${SUCCESS}`}>
      This is a success alert — check it out!
    </Alert>
    <Alert className={`${ALERT} ${DANGER}`}>
      This is a danger alert — check it out!
    </Alert>
    <Alert className={`${ALERT} ${WARNING}`}>
      This is a warning alert — check it out!
    </Alert>
    <Alert className={`${ALERT} ${INFO}`}>
      This is a info alert — check it out!
    </Alert>
    <Alert className={`${ALERT} ${LIGHT}`}>
      This is a light alert — check it out!
    </Alert>
    <Alert className={`${ALERT} ${DARK}`}>
      This is a dark alert — check it out!
    </Alert>
  </div>
, document.getElementById('root'))
````