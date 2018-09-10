import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardColumns } from 'src/cards/CardColumns'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardColumns', () => {
  const child = <p>111</p>
  notCrash(CardColumns)
  defaultTag(CardColumns, 'div')
  defaultProps(CardColumns, { tag: 'div' })
  renderChild(CardColumns, child, 'p')
  customTag(CardColumns, 'section', 'section')
  displayName(CardColumns, 'xbrick.CardColumns')
})
