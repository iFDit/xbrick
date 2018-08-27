import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Button } from 'src/buttons/Button'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('AlertLink', () => {
  const child = <p>111</p>
  notCrash(Button)
  defaultTag(Button, 'button')
  defaultProps(Button, { tag: 'button' })
  renderChild(Button, child, 'p')
  customTag(Button, 'div', 'div')
  displayName(Button, 'xbrick.Button')
})
