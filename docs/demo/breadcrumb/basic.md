基本用法

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import 'xbrick/lib/style/index.css'
import { Breadcrumb, BreadcrumbItem } from 'xbrick'

ReactDOM.render(
  <div>
    <Breadcrumb>
      <BreadcrumbItem active>Home</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Library</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Data</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Current</BreadcrumbItem>
    </Breadcrumb>
  </div>
, document.getElementById('root'))
````
