基本用法

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
        <DropdownToggle>
          <Button onClick={() => this.toggle()}>Toggle</Button>
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
