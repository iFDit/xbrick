自定义标签

````jsx
import { ButtonToolbar, ButtonGroup, Button } from 'xbrick'

ReactDOM.render(
  <ButtonToolbar tag="p">
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
