显示关闭按钮，点击可关闭警告。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Alert, AlertStyles } from 'xbrick'
import 'xbrick/lib/style/index.css'

const { ALERT, WARNING, CLOSE } = AlertStyles
const afterClose = () => {
  console.log('I had been closed.')
}

ReactDOM.render(
  <Alert className={`${ALERT} ${WARNING}`} afterClose={() => console.log('I had been closed.')}>
    Warning Alert with dismiss button.
    <AlertClose className={CLOSE}/>
  </Alert>
, document.getElementById('root'))
````
