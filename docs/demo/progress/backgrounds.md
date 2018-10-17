
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Progress, ProgressBar } from 'xbrick'

ReactDOM.render(
  <Fragment>
    <Progress className="mb-2">
      <ProgressBar color="success" width={25}/>
    </Progress>
    <Progress className="mb-2">
      <ProgressBar color="info" width={50}/>
    </Progress>
    <Progress className="mb-2">
      <ProgressBar color="warning" width={70}/>
    </Progress>
    <Progress className="mb-2">
      <ProgressBar color="danger" width={100}/>
    </Progress>
  </Fragment>
, document.getElementById('root'))

````