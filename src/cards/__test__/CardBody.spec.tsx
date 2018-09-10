import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardBody } from 'src/cards/CardBody'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardBody', () => {
  const child = <p>111</p>
  notCrash(CardBody)
  defaultTag(CardBody, 'div')
  defaultProps(CardBody, { tag: 'div' })
  renderChild(CardBody, child, 'p')
  customTag(CardBody, 'section', 'section')
  displayName(CardBody, 'xbrick.CardBody')
})
