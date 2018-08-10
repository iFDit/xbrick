基本使用

````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Jumbotron } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <Jumbotron>
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </Jumbotron>
, document.getElementById('root'))
````
