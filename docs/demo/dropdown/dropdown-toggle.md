可以使用不同类型的 `Button`

````jsx
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'xbrick'

class Example extends React.Component {
  state = {
    show: false
  }

  toggle

  render () {
    const { show } = this.state
    const { bstype, toggleText } = this.props
    return (
      <Dropdown>
        <DropdownToggle bstype={bstype} onClick={() => toggle()}>
          {toggleText}
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
  <>
    <Example>Primary</Example>
    <Example bstype="secondary">Secondary</Example>
    <Example bstype="success">Success</Example>
    <Example bstype="info">Info</Example>
    <Example bstype="warning">Warning</Example>
    <Example bstype="danger">Danger</Example>
  </>
, rootNode)
````
