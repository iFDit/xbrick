import * as React from 'react'
import { Collapse } from 'xbrick'

export const Example = () => {
  return (
    <Collapse show={true}>
      {({ slideup }) => <p onClick={slideup}>Click me to hide</p>}
    </Collapse>
  )
}

export default Example
