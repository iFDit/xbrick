import * as React from 'react'
import { DropdownItem, DropdownMenu } from 'xbrick'

const Example = () => {
  return (
    <>
      <DropdownMenu  show={true}>
          {({ slideup, slidedown }) => {
            return (
              <>
                <DropdownItem header>Dropdown header</DropdownItem>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem disabled>Something else here</DropdownItem>
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
    </>
  )
}

export default Example
