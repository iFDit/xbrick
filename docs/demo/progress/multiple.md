
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Progress, ProgressBar } from 'xbrick'

ReactDOM.render(
  <Progress>
    <ProgressBar width={15}/>
    <ProgressBar width={30} color="success"/>
    <ProgressBar width={40} color
    ="info"/>
  </Progress>
, document.getElementById('root'))

````
