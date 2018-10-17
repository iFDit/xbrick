
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Progress, ProgressBar } from 'xbrick'

ReactDOM.render(
  <Progress>
    <ProgressBar width={25}>25%</ProgressBar>
  </Progress>
, document.getElementById('root'))

````