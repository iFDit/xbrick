通过外部按钮控制 `Collapse` 组件的显示或隐藏。

````jsx
import { Collapse, Button } from 'xbrick'

class Inner extends React.Component {
  private open
  private close

  render () {
    return (
      <>
        <Button onClick={this.open}>Open</Button>
        <Button onClick={this.close}>Close</Button>
        <Collapse>
          {({ slideup, slidedown }) => {
            this.open = slidedown
            this.close = slideup

            return <p>hide/open this through external button.</p>
          }}
        </Collapse>
      </>
    )
  }
}

ReactDOM.render(
  <Example />
, rootNode)
````
