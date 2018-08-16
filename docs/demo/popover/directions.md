
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Popover, PopoverBody, PopoverHeader, Button } from 'xbrick'

class Examples extends React.Component {
  state = {
    top: false,
    bottom: false,
    left: false,
    right: false,
  }
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

  toggle = direction => () => {
    const open = this.state[direction]
    this.setState({ [direction]: !open })
  }

  render () {
    return (
      <Fragment>
        <Popover open={this.state.top} content={this.renderPopoverContent()} placement="top">
          <Button bstype="secondary" onClick={this.toggle('top')}>Popover on top</Button>
        </Popover>
        <Popover open={this.state.bottom} content={this.renderPopoverContent()} placement="bottom">
          <Button bstype="secondary" onClick={this.toggle('bottom')}>Popover on bottom</Button>
        </Popover>
        <Popover open={this.state.left} content={this.renderPopoverContent()} placement="left">
          <Button bstype="secondary" onClick={this.toggle('left')}>Popover on left</Button>
        </Popover>
        <Popover open={this.state.right} content={this.renderPopoverContent()} placement="right">
          <Button bstype="secondary" onClick={this.toggle('right')}>Popover on right</Button>
        </Popover>
      </Fragment>
    )
  }
}

ReactDOM.render(
  <Examples />
, document.getElementById('root'))
````