import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button } from 'xbrick'

class DropdownComponent extends React.Component<any> {
  public state = { show: false }

  public toggle = () => {
    const { show } = this.state
    show ? this.slideup() : this.slidedown()
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
        <Button>Primary</Button>
        <DropdownToggle onClick={() => {
          this.toggle()
        }} bstype={this.props.bstype} />
        <DropdownMenu afterStateChange={(s: boolean) => this.setState({ show: s })} show={show}>
          {({ slideup, slidedown }) => {
            this.slideup = slideup
            this.slidedown = slidedown
            return (
              <>
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
              </>
            )
          }}
        </DropdownMenu>
      </Dropdown>
    )
  }
}

const Example = () => {
  return (
    <>
      <DropdownComponent />
    </>
  )
}

export default Example