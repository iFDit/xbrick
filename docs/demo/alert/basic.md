简单的用法，适用于任何文本长度的警告提示。


````jsx
import { Alert } from 'xbrick';

ReactDOM.render(
  <>
    <Alert type="primary">
      This is a primary alert — check it out!
    </Alert>
    <Alert type="secondary">
      This is a secondary alert — check it out!
    </Alert>
    <Alert type="success">
      This is a success alert — check it out!
    </Alert>
    <Alert type="danger">
      This is a danger alert — check it out!
    </Alert>
    <Alert type="warning">
      This is a warning alert — check it out!
    </Alert>
    <Alert type="info">
      This is a info alert — check it out!
    </Alert>
    <Alert type="light">
      This is a light alert — check it out!
    </Alert>
    <Alert type="dark">
      This is a dark alert — check it out!
    </Alert>
  </>
, rootNode);
````