import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BreadcrumbItem } from 'src/breadcrumbs/BreadcrumbItem'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Badge', () => {
  const child = <p>111</p>
  notCrash(BreadcrumbItem)
  defaultTag(BreadcrumbItem, 'li')
  defaultProps(BreadcrumbItem, { tag: 'li' })
  renderChild(BreadcrumbItem, child, 'p')
  customTag(BreadcrumbItem, 'div', 'div')
  displayName(BreadcrumbItem, 'xbrick.Breadcrumb')
})
