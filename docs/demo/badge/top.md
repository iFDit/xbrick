显示为右上角的徽标，一般用于展示待处理的数量。

````jsx
import { Badge } from 'xbrick'

ReactDOM.render(
  <>
    <Badge count={5} top>
      <a className="example" />
    </Badge>
    <Badge count={10} top>
      <a className="example" />
    </Badge>
  </>
, rootNode)
````