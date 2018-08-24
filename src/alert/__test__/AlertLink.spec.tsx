import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { AlertLink } from 'src/alert/AlertLink'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('AlertLink', () => {
  const child = <p>111</p>
  notCrash(AlertLink)
  defaultTag(AlertLink, 'a')
  defaultProps(AlertLink, { tag: 'a' })
  renderChild(AlertLink, child, 'p')
  customTag(AlertLink, 'div', 'div')
  displayName(AlertLink, 'xbrick.AlertLink')
})
