import * as React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'xbrick'

class DropdownComponent extends React.Component {
  public state = { show: false }

  public toggle: any

  render () {
    const { show } = this.state
    return (
      <Dropdown>
        <DropdownToggle onClick={() => {
          console.log(this.toggle)
          this.toggle()
        }}>
          Toggle
        </DropdownToggle>
        <DropdownMenu afterStateChange={(s: boolean) => this.setState({ show: s })} show={show}>
          {({ slideup, slidedown }) => {
            this.toggle = show ? slideup : slidedown
            return (
              <>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
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
    <DropdownComponent />
  )
}

export default Example
