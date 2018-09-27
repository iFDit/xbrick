import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardBody, cardBodyClass } from 'src/cards/CardBody'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardBody', () => {
  const child = <p>111</p>
  notCrash(CardBody)
  defaultTag(CardBody, 'div')
  defaultProps(CardBody, { tag: 'div', overlay: false })
  renderChild(CardBody, child, 'p')
  customTag(CardBody, 'section', 'section')
  displayName(CardBody, 'xbrick.CardBody')

  describe('cardBodyClass', () => {
    it('should create default className', () => {
      expect(cardBodyClass()).toBe('card-body')
      expect(cardBodyClass({className: 'custom'})).toBe('custom card-body')
      expect(cardBodyClass({className: 'custom', overlay: true })).toBe('custom card-img-overlay')
    })
  })
})
