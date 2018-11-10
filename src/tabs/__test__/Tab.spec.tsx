import React from 'react'
import { Tab } from 'src/tabs/Tab'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('Tab', () => {
  const child = <p>111</p>
  notCrash(Tab)
  defaultTag(Tab, 'div')
  defaultProps(Tab, { tag: 'div' })
  renderChild(Tab, child, 'p')
  customTag(Tab, 'section', 'section')
  displayName(Tab, 'xbrick.Tab')
})
