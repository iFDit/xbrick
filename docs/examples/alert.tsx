import * as React from 'react'
import { Alert } from 'xbrick'

const Example = () => {
  return (
    <>
      <Alert bstype="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert bstype="secondary">
        This is a secondary alert — check it out!
      </Alert>
      <Alert bstype="success">
        This is a success alert — check it out!
      </Alert>
      <Alert bstype="danger">
        This is a danger alert — check it out!
      </Alert>
      <Alert bstype="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert bstype="info">
        This is a info alert — check it out!
      </Alert>
      <Alert bstype="light">
        This is a light alert — check it out!
      </Alert>
      <Alert bstype="dark">
        This is a dark alert — check it out!
      </Alert>
    </>
  )
}

export default Example
