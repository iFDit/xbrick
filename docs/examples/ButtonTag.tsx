import * as React from 'react'
import { Button } from 'xbrick'

const Example = () => {
  return (
    <>
      <Button tag="a" href="">Link</Button>
      <Button tag="input" type="button" value="Input" />
      <Button tag="input" type="reset" value="Reset" />
      <Button tag="input" type="submit" value="Submit" />
    </>
  )
}

export default Example
