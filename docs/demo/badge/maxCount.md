封顶数字，传入的count大于maxCount时，会显示`${maxCount}+`。

````jsx
import { Badge } from 'xbrick'

ReactDOM.render(
  <>
    <Badge maxCount={10} count={11} top>
      <a className="example" />
    </Badge>
  </>
, rootNode)
````