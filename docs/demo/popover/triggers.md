
````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Popover, PopoverBody, PopoverHeader, Button } from 'xbrick'

class Examples extends React.Component {
  state = {
    hover: false,
    focus: false,
    click: false,
  }

  element

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this) as HTMLElement
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

  render () {
    return (
      <>
        <Col xs="auto" className="handle-hover">
          <Popover open={this.state.hover} content={this.renderPopoverContent()}>
            <Button bstype="secondary">Toggle Popover</Button>
          </Popover>
        </Col>
        <Col xs="auto">
          <Popover open={this.state.focus} content={this.renderPopoverContent()}>
            <Button bstype="secondary" onFocus={this.toggle('focus')} onBlur={this.toggle('focus')}>Toggle Popover</Button>
          </Popover>
        </Col>
        <Col xs="auto">
          <Popover open={this.state.click} content={this.renderPopoverContent()}>
            <Button bstype="secondary" onClick={this.toggle('click')}>Toggle Popover</Button>
          </Popover>
        </Col>
      </>
    )
  }
}
ReactDOM.render(
  <Examples />
, document.getElementById('root'))
````
