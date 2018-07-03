自定义 `DropdownToggle`。

````jsx
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'xbrick'

class Example extends React.Component {
  state = {
    show: false
  }

  toggle

  render () {
    const { show } = this.state
    return (
      <Dropdown>
        <DropdownToggle tag="a" onClick={() => this.toggle()}>
          Toggle
        </DropdownToggle>
        <DropdownMenu>
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

ReactDOM.render(
  <Example />
, rootNode)
````
