
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Progress, ProgressBar } from 'xbrick'

ReactDOM.render(
  <Progress>
    <ProgressBar width={75} striped animate/>
  </Progress>
, document.getElementById('root'))

````