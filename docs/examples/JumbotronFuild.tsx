import * as React from 'react'
import { Jumbotron, Container } from 'xbrick'

const Example = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="display-4">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </Container>
    </Jumbotron>
  )
}

export default Example
