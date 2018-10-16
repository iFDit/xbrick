占据整个宽度

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Jumbotron, Container } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Jumbotron fluid>
    <Container>
      <h1 className="display-4">Fluid jumbotron</h1>
      <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </Container>
  </Jumbotron>
, document.getElementById('root'))
````
