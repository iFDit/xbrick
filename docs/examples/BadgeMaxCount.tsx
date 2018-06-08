import * as React from 'react'
import { Badge } from 'xbrick'

const Example = () => {
  return (
    <>
      <Badge maxCount={10} count={11} top>
        <a style={{display: 'inline-block', height: 42, width: 42, background: '#eee'}} />
      </Badge>
      <Badge maxCount={99} count={100} top>
        <a style={{display: 'inline-block', height: 42, width: 42, background: '#eee'}} />
      </Badge>
      <Badge maxCount={999} count={1000} top>
        <a style={{display: 'inline-block', height: 42, width: 42, background: '#eee'}} />
      </Badge>
    </>
  )
}

export default Example
