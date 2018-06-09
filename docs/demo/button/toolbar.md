按钮工具栏

展示多组按钮

````jsx
import { ButtonToolbar, ButtonGroup, Button } from 'xbrick'

ReactDOM.render(
  <ButtonToolbar>
    <ButtonGroup>
      <Button>Primary</Button>
      <Button>Other</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button bstype="info">Info</Button>
      <Button bstype="warning">Warning</Button>
    </ButtonGroup>
  </ButtonToolbar>
, rootNode)
````
