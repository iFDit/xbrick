基本用法

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Collapse, Button } from 'xbrick'
import 'xbrick/lib/style/index.css'

class Example extends React.Component {
  state = { open: true }

  toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render () {
    return (
      <>
        <Button style={{marginBottom: 4}} onClick={() => this.toggle()}>Toggle</Button>
        <Collapse
          open={this.state.open}
          style={{border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 4, padding: 10}}
        >
          <p>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </Collapse>
      </>
    )
  }
}

ReactDOM.render(
  <Example />
, document.getElementById('root'))
````
