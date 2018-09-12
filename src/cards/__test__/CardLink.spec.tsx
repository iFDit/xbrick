import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardLink } from 'src/cards/CardLink'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardLink', () => {
  const child = <p>111</p>
  notCrash(CardLink)
  defaultTag(CardLink, 'a')
  defaultProps(CardLink, { tag: 'a' })
  renderChild(CardLink, child, 'p')
  customTag(CardLink, 'p', 'p')
  displayName(CardLink, 'xbrick.CardLink')
})