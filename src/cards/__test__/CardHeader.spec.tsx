import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardHeader } from 'src/cards/CardHeader'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardHeader', () => {
  const child = <p>111</p>
  notCrash(CardHeader)
  defaultTag(CardHeader, 'div')
  defaultProps(CardHeader, { tag: 'div' })
  renderChild(CardHeader, child, 'p')
  customTag(CardHeader, 'section', 'section')
  displayName(CardHeader, 'xbrick.CardHeader')
})
