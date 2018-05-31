import * as React from 'react'
import { Alert } from 'xbrick'

const Example = () => {
  return (
    <>
      <Alert closable={true}>
        closable closable closable closable closable closable closable.
      </Alert>
      <Alert closable={true} type="success">
        closable closable closable closable closable closable closable.
      </Alert>
    </>
  )
}

export default Example
