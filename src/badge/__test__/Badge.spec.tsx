import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Badge } from 'src/badge/Badge'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Badge', () => {
  const child = <p>111</p>
  notCrash(Badge)
  defaultTag(Badge, 'span')
  defaultProps(Badge, { tag: 'span' })
  renderChild(Badge, child, 'p')
  customTag(Badge, 'div', 'div')
  displayName(Badge, 'xbrick.Badge')
})
