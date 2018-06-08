import * as React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'xbrick'

const Example = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem><a href="">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="">Library</a></BreadcrumbItem>
        <BreadcrumbItem><a href="">Data</a></BreadcrumbItem>
        <BreadcrumbItem active>Current</BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

export default Example
