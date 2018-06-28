import * as React from 'react'
import { Collapse, Button, Card, CardBody } from 'xbrick'

class Pannel extends React.Component {
  public state = {
    collapseState: 'Closed',
  }
  public toggle: any

  render() {
    const { collapseState } = this.state
    return (
      <div>
        <p>Current state: {this.state.collapseState}</p>
        <Button onClick={() => {
          if (collapseState.indexOf('ing') > -1) { return }
          this.setState({ collapseState: collapseState === 'Closed' ? 'Opening' : 'Closing' })
          this.toggle()
          }} size="small" style={{margin: 10}}>Toggle</Button>
        <Collapse show={false} afterAnimate={(s) => {
          this.setState({ collapseState: s ? 'Opened' : 'Closed' })
        }}>
          {({ slideup, slidedown }) => {
            this.toggle = collapseState === 'Closed' ? slidedown : slideup
            return (
              <Card style={{width: 300}}>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </CardBody>
              </Card>
            )
          }}
        </Collapse>
      </div>
    )
  }
}

const Example = () => {
  return (
    <Pannel />
  )
}

export default Example
