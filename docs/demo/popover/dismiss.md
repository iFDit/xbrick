
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Popover, PopoverBody, PopoverHeader, Button } from 'xbrick'

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
  componentDidMount() {
    document.addEventListener('click', this.handleClick)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }
  handleClick = evt => {
    const { target } = evt
    if (!ReactDOM.findDOMNode(this).contains(target)) {
      this.toggle()
    }
  }

  render () {
    return (
      <Popover open={this.state.open} content={this.renderPopoverContent()}>
        <Button bstype="secondary" onClick={this.toggle}>Dismissible popover</Button>
      </Popover>
    )
  }
}

ReactDOM.render(
  <Examples />
, document.getElementById('root'))
````
