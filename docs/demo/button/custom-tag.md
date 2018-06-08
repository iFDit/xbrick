自定义标签

通过tag属性可以自定义按钮的渲染标签。

````jsx
import { Button } from 'xbrick'

ReactDOM.render(
  <>
    <Button tag="input" type="reset" value="Reset" />
    <Button tag="input" type="submit" value="Submit" />
  </>
, rootNode)
````
