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
      <Button color="info">Info</Button>
      <Button color="warning">Warning</Button>
    </ButtonGroup>
  </ButtonToolbar>
, rootNode)
````
