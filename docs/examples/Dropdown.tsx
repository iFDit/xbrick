import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'xbrick'

class DropdownComponent extends React.Component {
  public state = { show: false }

  public toggle = () => {
    const { show } = this.state
    this.setState({ show: !show })
  }

  public slideup = () => {/**/}
  public slidedown = () => {/**/}
  public dom: any

  public componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this)
    window.addEventListener('click', this.autoHide)
  }

  public componentWillUnmount() {
    window.removeEventListener('click', this.autoHide)
  }

  private autoHide = (evt: Event) => {
    const target = evt.target
    if (!this.dom.contains(target)) {
      this.slideup()
    }
  }

  render () {
    const { show } = this.state
    return (
      <Dropdown>
        <DropdownToggle>
          Toggle
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

const Example = () => {
  return (
    <DropdownComponent />
  )
}

export default Example
