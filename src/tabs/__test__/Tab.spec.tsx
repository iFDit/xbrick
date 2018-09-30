import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Tab } from 'src/tabs/Tab'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Tab', () => {
  const child = <p>111</p>
  notCrash(Tab)
  defaultTag(Tab, 'div')
  defaultProps(Tab, { tag: 'div' })
  renderChild(Tab, child, 'p')
  customTag(Tab, 'section', 'section')
  displayName(Tab, 'xbrick.Tab')
})
