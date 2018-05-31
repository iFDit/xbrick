import * as React from 'react'
import { Alert } from 'xbrick'

const Example = () => {
  return (
    <>
      <Alert closeText="close" closable={true}>
        custom closeText custom closeText custom closeText
      </Alert>
      <Alert closeText={<p>close Node</p>} closable={true}>
        custom closeText Node custom closeText Node custom
      </Alert>
    </>
  )
}

export default Example
