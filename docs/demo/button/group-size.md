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
      <Button bstype="secondary">Active</Button>
      <Button bstype="secondary">Like</Button>
      <Button bstype="secondary">Primary</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
      <Button bstype="info">Active</Button>
      <Button bstype="info">Like</Button>
      <Button bstype="info">Primary</Button>
    </ButtonGroup>
  </>
, rootNode)
````
