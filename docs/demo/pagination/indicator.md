````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Pagination, PageItem, PageLink, PageIndicator } from 'xbrick'

ReactDOM.render(
  <Pagination>
    <PageIndicator direction="prev"/>
    <PageItem><PageLink href="#">1</PageLink></PageItem>
    <PageItem><PageLink href="#">2</PageLink></PageItem>
    <PageItem><PageLink href="#">3</PageLink></PageItem>
    <PageItem><PageLink href="#">4</PageLink></PageItem>
    <PageIndicator direction="next"/>
  </Pagination>
, document.getElementById('root'))
````
