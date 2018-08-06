自定义标签

通过tag属性可以自定义按钮的渲染标签。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'xbrick'
import 'xbrick/lib/style/index.css'


ReactDOM.render(
  <div>
    <Button tag="a" href="">Link</Button>
    <Button tag="input" type="button" value="Input" />
    <Button tag="input" type="reset" value="Reset" />
    <Button tag="input" type="submit" value="Submit" />
  </div>
, document.getElementById('root'))
````
