显示关闭按钮，点击可关闭警告。

````jsx
import { Alert } from 'xbrick'

const onClose = (e) => {
  console.log('click close-button.')
}

const afterClose = () => {
  console.log('I had been closed.')
}

ReactDOM.render(
  <>
    <Alert bstype="warning" onClose={onClose} afterClose={afterClose}>
      Warning Alert with dismiss button.Click-Click-Click
    </Alert>
    <Alert bstype="error" onClose={onClose} afterClose={afterClose}>
      Error Alert with dismiss button.Click-Click-Click
    </Alert>
  </>
, rootNode)
````
