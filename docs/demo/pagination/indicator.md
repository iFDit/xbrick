````jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Pagination, PageItem, PageLink, PageIndicator } from 'xbrick'

ReactDOM.render(
  <Pagination>
    <PageItem><PageLink href="#"><PageIndicator direction="prev"/></PageLink></PageItem>
    <PageItem><PageLink href="#">1</PageLink></PageItem>
    <PageItem><PageLink href="#">2</PageLink></PageItem>
    <PageItem><PageLink href="#">3</PageLink></PageItem>
    <PageItem><PageLink href="#">4</PageLink></PageItem>
    <PageItem><PageLink href="#"><PageIndicator direction="next"/></PageLink></PageItem>
  </Pagination>
, document.getElementById('root'))
````
