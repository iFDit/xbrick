自定义关闭标签。

````jsx
import { Alert } from 'xbrick'

const close = <span style={{color: 'red'}}>close node</span>

ReactDOM.render(
  <>
    <Alert closeText="close">
      I have custom close text of type string.
    </Alert>
    <Alert closeText={close}>
      Use custom close text of type ReactNode.
    </Alert>
  </>
, rootNode)
````
