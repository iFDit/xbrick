基本用法

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbStyles,
  BreadcrumbItemStyles } from 'xbrick'

const { ITEM, ACTIVE } = BreadcrumbItemStyles

ReactDOM.render(
  <div>
    <Breadcrumb className={BreadcrumbStyles.BREADCRUMB}>
      <BreadcrumbItem className={`${ITEM} ${ACTIVE}`}>Home</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className={BreadcrumbStyles.BREADCRUMB}>
      <BreadcrumbItem className={`${ITEM}`}>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem className={`${ITEM} ${ACTIVE}`}>Library</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className={BreadcrumbStyles.BREADCRUMB}>
      <BreadcrumbItem className={`${ITEM}`}>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem className={`${ITEM}`}>
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem className={`${ITEM}`}>
        <a href="#">Data</a>
      </BreadcrumbItem>
      <BreadcrumbItem className={`${ITEM} ${ACTIVE}`}>Current</BreadcrumbItem>
    </Breadcrumb>
  </div>
, document.getElementById('root'))
````
