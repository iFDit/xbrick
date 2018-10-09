显示关闭按钮，点击可关闭警告。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Alert } from 'xbrick'
import 'xbrick/lib/style/index.css'

const AlertClose = Alert.Close
const afterClose = () => {
  console.log('I had been closed.')
}

ReactDOM.render(
  <Alert color="warning" afterClose={() => console.log('I had been closed.')}>
    Warning Alert with dismiss button.
    <AlertClose/>
  </Alert>
, document.getElementById('root'))
````
