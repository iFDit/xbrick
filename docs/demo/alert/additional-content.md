可以包含额外的ReactNode，如header或者dividers

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Alert, AlertStyles } from 'xbrick'
import 'xbrick/lib/style/index.css'

const { ALERT, SUCCESS } = AlertStyles

ReactDOM.render(
  <Alert className={`${ALERT} ${SUCCESS}`}>
    <h4>Well done</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr />
    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </Alert>
, document.getElementById('root'))
````
