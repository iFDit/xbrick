
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

  toggle = direction => () => {
    const open = this.state[direction]
    this.setState({ [direction]: !open })
  }

  render () {
    return (
      <div style={{marginTop: 200,marginLeft: 280}}>
        <Popover open={this.state.top} content={this.renderPopoverContent()} placement="top">
          <Button color="secondary" onClick={this.toggle('top')} className="mt-2">Popover on top</Button>
        </Popover>
        <br/>
        <Popover open={this.state.bottom} content={this.renderPopoverContent()} placement="bottom">
          <Button color="warning" onClick={this.toggle('bottom')} className="mt-2">Popover on bottom</Button>
        </Popover>
          <br/>
        <Popover open={this.state.left} content={this.renderPopoverContent()} placement="left">
          <Button color="info" onClick={this.toggle('left')} className="mt-2">Popover on left</Button>
        </Popover>
        <br/>
        <Popover open={this.state.right} content={this.renderPopoverContent()} placement="right">
          <Button color="success" onClick={this.toggle('right')} className="mt-2">Popover on right</Button>
        </Popover>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples />
, document.getElementById('root'))
````