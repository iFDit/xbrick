import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardGroup } from 'src/cards/CardGroup'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardGroup', () => {
  const child = <p>111</p>
  notCrash(CardGroup)
  defaultTag(CardGroup, 'div')
  defaultProps(CardGroup, { tag: 'div' })
  renderChild(CardGroup, child, 'p')
  customTag(CardGroup, 'section', 'section')
  displayName(CardGroup, 'xbrick.CardGroup')
})
