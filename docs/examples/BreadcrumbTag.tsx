import * as React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'xbrick'

const Example = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

export default Example
