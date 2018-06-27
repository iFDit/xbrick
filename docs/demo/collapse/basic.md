基本用法

````jsx
import { Collapse } from 'xbrick'

ReactDOM.render(
  <Collapse show={true}>
    {({ slideup }) => <p onClick={slideup}>Click me to hide</p>}
  </Collapse>
, rootNode)
````
