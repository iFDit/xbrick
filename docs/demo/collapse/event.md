使用 `afterAnimate` 属性监听组件状态的变化

````jsx
import { Collapse, Button, Card } from 'xbrick'

class Example {
  state = {
    collapseState: 'closed'
  }
  render() {
    const { collapseState } = this.state
    <div>
      <p>Current state: {this.state.collapseState}</p>
      <Button onClick={() => {
        if (collapseState.indexOf('ing') > -1) { return }
        this.setState({ collapseState: collapseState === 'Closed' ? 'Opening' : 'Closing' })
        this.toggle()
        }}>Toggle</Button>
      <Collapse show={false} afterAnimate={(s) => {
        this.setState({ collapseState: s ? 'Opened' : 'Closed' })
      }}>
        {({ slideup, slidedown }) => {
          this.toggle = collapseState === 'Closed' ? slidedown : slideup
          return (
            <Card>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Card>
          )
        }}
      </Collapse>
    </div>
  }
}

ReactDOM.render(
  <Example />
, rootNode)
````
