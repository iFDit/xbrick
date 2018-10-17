
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Tooltip, Button } from 'xbrick'

class Examples extends React.Component {
  state = { open: false }
  toggle = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  handleMouseenter = () => {
    this.setState({ open: true })
  }
  handleMouseleave = () => {
    this.setState({ open: false })
  }
  render () {
    return (
      <div>
        Somewhere in here is a{` `}
        <Tooltip content="controlled tooltip" placement="right" open={this.state.open}>
          <a href="#" className="target-elem" onMouseEnter={this.handleMouseenter} onMouseLeave={this.handleMouseleave}>tooltip.</a>
        </Tooltip>
      </div>
    )
  }
}


ReactDOM.render(
  <Examples/>
, document.getElementById('root'))
````
