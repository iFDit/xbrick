import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ButtonToolbar } from 'src/buttons/ButtonToolbar'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('ButtonToolbar', () => {
  const child = <p>111</p>
  notCrash(ButtonToolbar)
  defaultTag(ButtonToolbar, 'div')
  defaultProps(ButtonToolbar, { tag: 'div' })
  renderChild(ButtonToolbar, child, 'p')
  customTag(ButtonToolbar, 'span', 'span')
  displayName(ButtonToolbar, 'xbrick.ButtonToolbar')
})
