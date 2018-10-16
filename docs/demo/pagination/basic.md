````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Pagination, PageItem, PageLink } from 'xbrick'

ReactDOM.render(
  <Pagination>
    <PageItem><PageLink href="#">Previous</PageLink></PageItem>
    <PageItem><PageLink href="#">1</PageLink></PageItem>
    <PageItem><PageLink href="#">2</PageLink></PageItem>
    <PageItem><PageLink href="#">3</PageLink></PageItem>
    <PageItem><PageLink href="#">4</PageLink></PageItem>
    <PageItem><PageLink href="#">Next</PageLink></PageItem>
  </Pagination>
, document.getElementById('root'))
````
