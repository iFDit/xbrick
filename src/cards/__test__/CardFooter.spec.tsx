import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardFooter } from 'src/cards/CardFooter'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardFooter', () => {
  const child = <p>111</p>
  notCrash(CardFooter)
  defaultTag(CardFooter, 'div')
  defaultProps(CardFooter, { tag: 'div' })
  renderChild(CardFooter, child, 'p')
  customTag(CardFooter, 'section', 'section')
  displayName(CardFooter, 'xbrick.CardFooter')
})
