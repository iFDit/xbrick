修改按钮组的大小

通过设置size为 `large`、`small`、`middle` 来展示大、中、小按钮。

````jsx
import { ButtonGroup, Button } from 'xbrick'

ReactDOM.render(
  <>
    <ButtonGroup size="large">
      <Button>Active</Button>
      <Button>Like</Button>
      <Button>Primary</Button>
    </ButtonGroup>
    <ButtonGroup size="middle">
      <Button color="secondary">Active</Button>
      <Button color="secondary">Like</Button>
      <Button color="secondary">Primary</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
      <Button color="info">Active</Button>
      <Button color="info">Like</Button>
      <Button color="info">Primary</Button>
    </ButtonGroup>
  </>
, rootNode)
````
