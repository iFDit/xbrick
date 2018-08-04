显示关闭按钮，点击可关闭警告。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Alert } from 'xbrick'
import 'xbrick/lib/style/index.css'

const onClose = (e) => {
  console.log('click close-button.')
}

const afterClose = () => {
  console.log('I had been closed.')
}

ReactDOM.render(
  <Alert bstype="warning" closable onClose={onClose} afterClose={afterClose}>
    Warning Alert with dismiss button.
  </Alert>
, document.getElementById('root'))
````
