
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Popover, PopoverBody, PopoverHeader, Button } from 'xbrick'

class Examples extends React.Component {
  state = { open: true }
  renderPopoverContent = () => {
    return (
      <>
        <PopoverHeader>
          Popover Header
        </PopoverHeader>
        <PopoverBody>
          And here's some amazing content. It's very engaging. Right?
        </PopoverBody>
      </>
    )
  }
  toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }
  render () {
    return (
      <Popover open={this.state.open} content={this.renderPopoverContent()}>
        <Button bstype="secondary" onClick={this.toggle}>Toggle Popover</Button>
      </Popover>
    )
  }
}

ReactDOM.render(
  <Examples />
, document.getElementById('root'))
````