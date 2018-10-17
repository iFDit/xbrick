
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Popover, PopoverBody, PopoverHeader, Button, Col } from 'xbrick'

class Examples extends React.Component {
  state = {
    hover: false,
    focus: false,
    click: false,
  }

  element

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this)
    this.element = dom
    if (this.element) {
      this.element.addEventListener('mouseenter', this.handleMouseenter)
      this.element.addEventListener('mouseleave', this.handleMouseleave)
    }
  }
  componentWillUnmount() {
    if (this.element) {
      this.element.removeEventListener('mouseenter', this.handleMouseenter)
      this.element.removeEventListener('mouseleave', this.handleMouseleave)
    }
  }

  toggle = ways => () => {
    const open = this.state[ways]
    this.setState({ [ways]: !open })
  }

  handleMouseenter = evt => {
    this.setState({ hover: true })
  }

  handleMouseleave = evt => {
    setTimeout(() => this.setState({ hover: false }), 100)
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

  render () {
    return (
      <Fragment>
        <Col xs="auto" className="handle-hover">
          <Popover open={this.state.hover} content={this.renderPopoverContent()}>
            <Button color="secondary" className="mt-2">Toggle hover</Button>
          </Popover>
        </Col>
        <Col xs="auto">
          <Popover open={this.state.focus} content={this.renderPopoverContent()}>
            <Button color="secondary" onFocus={this.toggle('focus')} onBlur={this.toggle('focus')} className="mt-2">
              Toggle Focus
            </Button>
          </Popover>
        </Col>
        <Col xs="auto">
          <Popover open={this.state.click} content={this.renderPopoverContent()}>
            <Button color="secondary" onClick={this.toggle('click')} className="mt-2">Toggle Click</Button>
          </Popover>
        </Col>
      </Fragment>
    )
  }
}
ReactDOM.render(
  <Examples />
, document.getElementById('root'))
````
