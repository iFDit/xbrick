import * as React from 'react'
import { Collapse, Button } from 'xbrick'

class Inner extends React.Component {
  private open: any
  private close: any

  render () {
    return (
      <div>
        <Button onClick={() => this.open()} size="small" style={{marginRight: 5}}>Open</Button>
        <Button onClick={() =>  this.close()}size="small">Close</Button>
        <Collapse show={false}>
          {({ slideup, slidedown }) => {
            this.open = slidedown
            this.close = slideup

            return <p>hide or open this through external button.</p>
          }}
        </Collapse>
      </div>
    )
  }
}

const Example = () => {
  return (
    <Inner />
  )
}

export default Example
