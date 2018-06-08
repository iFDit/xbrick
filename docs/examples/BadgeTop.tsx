import * as React from 'react'
import { Badge } from 'xbrick'

const Example = () => {
  return (
    <>
      <Badge count={5} bstype="danger" top>
        <a style={{display: 'inline-block', height: 42, width: 42, background: '#eee'}} />
      </Badge>
      <Badge count={15} top>
        <a style={{display: 'inline-block', height: 42, width: 42, background: '#eee'}} />
      </Badge>
    </>
  )
}

export default Example
