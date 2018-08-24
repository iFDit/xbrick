import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Breadcrumb } from 'src/breadcrumbs/Breadcrumb'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Badge', () => {
  const child = <p>111</p>
  notCrash(Breadcrumb)
  defaultTag(Breadcrumb, 'ol')
  defaultProps(Breadcrumb, { tag: 'ol' })
  renderChild(Breadcrumb, child, 'p')
  customTag(Breadcrumb, 'div', 'div')
  displayName(Breadcrumb, 'xbrick.Breadcrumb')
})
