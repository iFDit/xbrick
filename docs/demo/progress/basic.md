
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Progress, ProgressBar } from 'xbrick'

ReactDOM.render(
  <Fragment>
    <Progress>
      <ProgressBar width={0}/>
    </Progress>
    <Progress>
      <ProgressBar width={25}/>
    </Progress>
    <Progress>
      <ProgressBar width={50}/>
    </Progress>
    <Progress>
      <ProgressBar width={70}/>
    </Progress>
    <Progress>
      <ProgressBar width={100}/>
    </Progress>
  </Fragment>
, document.getElementById('root'))

````