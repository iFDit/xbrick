
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Progress, ProgressBar } from 'xbrick'

ReactDOM.render(
  <Fragment>
    <Progress style={{height: 1}}>
      <ProgressBar width={25}/>
    </Progress>
    <Progress>
      <ProgressBar width={25}/>
    </Progress>
  </Fragment>
, document.getElementById('root'))

````