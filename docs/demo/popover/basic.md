
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Popover, Button } from 'xbrick'

class Examples extends React.Component {
  state = { open: false }
  renderPopoverContent = () => {
    return (
      <Fragment>
        <Popover.Header>
          Popover Header
        </Popover.Header>
        <Popover.Body>
          And here's some amazing content. It's very engaging. Right?
        </Popover.Body>
      </Fragment>
    )
  }
  toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }
  render () {
    return (
      <Popover open={this.state.open} content={this.renderPopoverContent()} placement="auto">
        <Button color="primary" onClick={this.toggle}>Toggle Popover</Button>
      </Popover>
    )
  }
}

ReactDOM.render(
  <Examples />
, document.getElementById('root'))
````
